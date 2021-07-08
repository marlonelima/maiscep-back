import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = new MongoMemoryServer()

let mongoServer: MongoMemoryServer

export const db = {
  async connect() {
    mongoServer = new MongoMemoryServer()
    await mongoServer.start()

    const mongoUri = mongoServer.getUri()

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  },

  async closeDatabase() {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongoServer.stop()
    await mongod.stop()
  },

  async clearDatabase() {
    const collections = mongoose.connection.collections

    for (const key in collections) {
      const collection = collections[key]
      await collection.deleteMany({})
    }
  }
}
