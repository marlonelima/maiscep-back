import { Cache } from '../../src/utils/redis'

describe('Redis cache', () => {
  it('should receive null because its not cached', async () => {
    const result = await Cache.get('random-that-not-exists')

    expect(result).toBe(null)
  })

  it('should receive the exact value', async () => {
    const randomKey = 'random_key'
    const randomValue = 'CAR AND BYCICLE'

    await Cache.set(randomKey, randomValue)
    const result = await Cache.get(randomKey)

    expect(result).toBe(randomValue)
  })
})
