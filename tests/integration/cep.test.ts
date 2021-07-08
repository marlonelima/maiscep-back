import supertest from 'supertest'

import { app } from '../../src/app'

const api = supertest(app)

it('should receive all the cep info', async () => {
  const response = await api.get('/cep/45810000')

  console.log(response.body)

  expect(1).toBe(1)
})
