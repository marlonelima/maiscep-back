import supertest from 'supertest'

import { app } from '../../src/app'
import { Cep } from '../../src/models/cep.model'

import { Cache } from '../../src/utils/redis'

const api = supertest(app)

export const cepInfo = {
  cep: '01001-000',
  logradouro: 'Praça da Sé',
  complemento: 'lado ímpar',
  bairro: 'Sé',
  localidade: 'São Paulo',
  uf: 'SP',
  ibge: '3550308',
  gia: '1004',
  ddd: '11',
  siafi: '7107'
}

describe('Get CEP', () => {
  it('should receive all the cep info', async () => {
    const response = await api.get('/cep/01001000')

    expect(response.body).toMatchObject(cepInfo)
  })

  it('should receive data from cache', async () => {
    await api.get('/cep/01001000')
    const response = await api.get('/cep/01001000')

    expect(response.body).toMatchObject(cepInfo)
  })

  it('should receive data from database', async () => {
    await Cep.create(cepInfo)
    await Cache.del('01001-000')

    const response = await api.get('/cep/01001000')

    expect(response.body).toMatchObject(cepInfo)
  })

  it('should receive status 400 because doesnt exists', async () => {
    const response = await api.get('/cep/01001555')

    expect(response.statusCode).toBe(404)
  })

  it('should receive status 500 because something went wrong', async () => {
    const response = await api.get('/cep/INVALID')

    expect(response.statusCode).toBe(500)
  })
})
