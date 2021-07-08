import { NextFunction, Request, Response } from 'express'

import { CepService } from '../services/cep.service'
import { Cep } from '../models/cep.model'

import { Cache } from '../utils/redis'
import { CepFormatter } from '../utils/formatter'

import { MyError } from '../errors'

export const CepController = {
  async cepFromCache(req: Request, res: Response, next: NextFunction) {
    const { _cep } = req.params
    // o parâmetro _cep sempre irá existir, caso contrário, não cairia nesta rota.

    const formatedCep = CepFormatter.addHyphen(_cep)

    const dataFromCache = await Cache.get(formatedCep)

    if (!dataFromCache) return next()

    const data = JSON.parse(dataFromCache)

    return res.json({
      bairro: data.bairro,
      cep: data.cep,
      complemento: data.complemento,
      ddd: data.ddd,
      gia: data.gia,
      ibge: data.ibge,
      localidade: data.localidade,
      logradouro: data.logradouro,
      siafi: data.siafi,
      uf: data.uf
    })
  },

  async cepFromDatabase(req: Request, res: Response, next: NextFunction) {
    const { _cep } = req.params

    const formatedCep = CepFormatter.addHyphen(_cep)

    const data = await CepService.getCepFromDatabase(formatedCep)

    if (!data) return next()

    await Cache.set(data.cep, JSON.stringify(data))

    return res.json({
      bairro: data.bairro,
      cep: data.cep,
      complemento: data.complemento,
      ddd: data.ddd,
      gia: data.gia,
      ibge: data.ibge,
      localidade: data.localidade,
      logradouro: data.logradouro,
      siafi: data.siafi,
      uf: data.uf
    })
  },

  async getNewCep(req: Request, res: Response) {
    const { _cep } = req.params

    const data = await CepService.getNewCepFromViaCep(_cep)

    if (data.erro)
      throw new MyError('O CEP não existe! Corrija e tente novamente.', 404)

    await Cep.create(data)

    await Cache.set(data.cep, JSON.stringify(data))

    return res.json({
      bairro: data.bairro,
      cep: data.cep,
      complemento: data.complemento,
      ddd: data.ddd,
      gia: data.gia,
      ibge: data.ibge,
      localidade: data.localidade,
      logradouro: data.logradouro,
      siafi: data.siafi,
      uf: data.uf
    })
  }
}
