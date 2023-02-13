import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};

module.exports = config;
