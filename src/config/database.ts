import mongoose from 'mongoose'

if (process.env.NODE_ENV !== 'test') {
  const DATABASE = process.env.DB_URI || 'mongodb://localhost:27017/maiscep'
  mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  mongoose.Promise = global.Promise
}
