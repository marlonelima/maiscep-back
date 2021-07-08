import redis from 'redis'

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
})

export const Cache = {
  async set(key: string, value: string) {
    return new Promise<void>((resolve) => {
      redisClient.set(key, value, () => resolve())
    })
  },

  async get(key: string): Promise<string | null> {
    return new Promise((resolve) => {
      redisClient.get(key, (err, value) => {
        return resolve(value)
      })
    })
  },

  async del(key: string): Promise<void> {
    return new Promise((resolve) => {
      redisClient.del(key, () => resolve())
    })
  }
}
