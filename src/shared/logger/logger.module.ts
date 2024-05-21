import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({})
export class LoggerModule {
  static forRoot(): DynamicModule {
    return {
      module: LoggerModule,
      global: true,
      providers: [LoggerService],
      exports: [LoggerService],
    };
  }
}
