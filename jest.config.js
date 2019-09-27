module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFilesAfterEnv: [`<rootDir>/src/util/test/setupTests.js`],
  /**
   * Enable absolute imports from specific entry points.
   * @example: `import Button from '@components/Button'`
   * @see: https://bit.ly/2KgcOOY
   */
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^@style$': '<rootDir>/src/util/style/',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@test$': '<rootDir>/src/util/test/',
  },
}
