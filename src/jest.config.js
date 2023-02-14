const Config = require('jest').Config;

const config = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
};

module.exports = config;
