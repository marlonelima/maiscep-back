import redis from 'redis'

const redisClient = redis.createClient({
  host: process.env.REDIS_URI,
  port: 6379
})

export const Cache = {
  async set(key: string, value: string) {
    return new Promise<void>((resolve, reject) => {
      redisClient.set(key, value, (err) => {
        if (err) return reject()

        return resolve()
      })
    })
  },

  async get(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      redisClient.get(key, (err, value) => {
        if (err) return reject()

        return resolve(value)
      })
    })
  }
}
