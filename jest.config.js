module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      "\\.(png)$": "<rootDir>/src/components/Banner/__mocks__/ProfNoBackMock.js"
    },
    
  };