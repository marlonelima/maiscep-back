export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'node',

  coveragePathIgnorePatterns: [
    '<rootDir>/src/config',
    '<rootDir>/src/server.ts',
    '<rootDir>/src/app.ts',
    '<rootDir>/src/errors/index.ts'
  ]
}
