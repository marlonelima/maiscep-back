import mockRedis from 'redis-mock'
import { DatabaseMock } from './db'

jest.mock('redis', () => mockRedis)

const db = new DatabaseMock()

beforeAll(async () => await db.connect())

beforeEach(async () => await db.clearDatabase())

afterAll(async () => await db.closeDatabase())
