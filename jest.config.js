module.exports = {
    testEnvironment: 'node',
    testMatch: [
      '**/__tests__/**/*.test.js',
      '**/*.test.js',
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
      },
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  