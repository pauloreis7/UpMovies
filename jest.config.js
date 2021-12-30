module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  // collectCoverageFrom: [
  //   "src/**/*.tsx",
  //   "!src/**/*.spec.tsx",
  //   "!src/**/main.tsx",
  //   "!src/**/App.tsx"
  // ],
  // coverageReporters: ["lcov", "json"]
}