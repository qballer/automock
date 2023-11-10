import { Config } from '@jest/types';
import baseConfig from './jest.base.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  projects: [
    '<rootDir>/packages/core',
    '<rootDir>/packages/adapters/nestjs',
    '<rootDir>/packages/testbeds/jest',
    '<rootDir>/packages/testbeds/sinon',
  ],
};

export default config;
