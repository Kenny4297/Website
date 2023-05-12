module.exports = {
    setupFiles: ['./src/setupTests.js', './src/polyfills.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      "\\.(png)$": "<rootDir>/src/components/Banner/__mocks__/ProfNoBackMock.js",
      "Clay\\.jpeg$": "<rootDir>/src/components/Banner/__mocks__/ClayMock.js",
      "Olu\\.jpeg$": "<rootDir>/src/components/Banner/__mocks__/OluMock.js",
      "Max\\.jpeg$": "<rootDir>/src/components/Banner/__mocks__/MaxMock.js",
      "Gary\\.jpeg$": "<rootDir>/src/components/Banner/__mocks__/GaryMock.js",
    },
  };