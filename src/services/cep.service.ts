import { ICep } from '../@types/interfaces'
import { ViaCepAPI } from '../config/api'
import { MyError } from '../errors'
import { Cep } from '../models/cep.model'

export const CepService = {
  async getNewCepFromViaCep(cep: string): Promise<ICep> {
    try {
      return (await ViaCepAPI.get(`/${cep}/json`)).data
    } catch (err) {
      throw new MyError('Algo deu errado, tente novamente mais tarde!', 500)
    }
  },
  async getCepFromDatabase(cep: string) {
    return await Cep.findOne({ cep })
  },
  async insertCepIntoDatabase(data: ICep) {
    return await Cep.create(data)
  }
}
