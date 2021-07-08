import mockRedis from 'redis-mock'
import { db } from './db'

jest.mock('redis', () => mockRedis)

beforeAll(async () => {
  await db.connect()
})

beforeEach(async () => await db.clearDatabase())

afterAll(async () => {
  await db.closeDatabase()
})
