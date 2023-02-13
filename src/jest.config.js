import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
};

module.exports = config;
