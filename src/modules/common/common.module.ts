import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { loggerOptions } from '../../constants/logger.constants';

@Global()
@Module({})
export class CommonModule {
  static forRoot(): DynamicModule {
    return {
      module: CommonModule,
      imports: [LoggerModule.forRoot(loggerOptions), ConfigModule.forRoot()],
    };
  }

  static forTest(): DynamicModule {
    return {
      module: CommonModule,
      imports: [ConfigModule.forRoot({ envFilePath: '../.env' })],
    };
  }
}
