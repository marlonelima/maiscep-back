import mongoose from 'mongoose'

import { MongoMemoryServer } from 'mongodb-memory-server'

export class DatabaseMock {
  mongoServer: MongoMemoryServer
  mongod: MongoMemoryServer

  constructor() {
    this.mongoServer = new MongoMemoryServer()
    this.mongod = new MongoMemoryServer()
  }

  async connect() {
    await this.mongoServer.start()

    const mongoUri = this.mongoServer.getUri()

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }

  async closeDatabase() {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()

    await this.mongoServer.stop()
    await this.mongod.stop()
  }

  async clearDatabase() {
    const collections = mongoose.connection.collections

    for (const key in collections) {
      const collection = collections[key]
      await collection.deleteMany({})
    }
  }
}
