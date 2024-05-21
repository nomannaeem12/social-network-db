import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { LoggerService as LS, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import { install as installSourceMapSupport } from 'source-map-support';

@Injectable({ scope: Scope.REQUEST })
export class LoggerService implements LS {
  private logger: winston.Logger;

  constructor(configService: ConfigService, @Inject(REQUEST) request: Request) {
    installSourceMapSupport();
    const format = winston.format;
    const level = configService.get<string>('LOGGING_LEVEL') || 'warn';
    const correlationId = request?.headers['x-amzn-trace-id'] || '';
    this.logger = winston.createLogger({
      level,
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        format.errors(),
        format.json(),
      ),
      defaultMeta: { application: 'td-api', correlationId },
      transports: [
        new winston.transports.Console({
          level,
        }),
      ],
    });
  }

  log(message: any) {
    this.logger.info(message);
  }
  error(message: any, trace: string) {
    this.logger.error(message, { trace });
  }
  warn(message: any) {
    this.logger.warn(message);
  }
  debug(message: any, params?: any) {
    this.logger.debug(message, params);
  }
  verbose(message: any) {
    this.logger.verbose(message);
  }
}
