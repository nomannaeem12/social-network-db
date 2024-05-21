import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LoggerService } from '../logger/logger.service';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private loggerService: LoggerService) {}
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const validationResponse =
      exception instanceof HttpException
        ? (exception.getResponse() as { error: string; message: string[] })
        : { error: exception.detail, message: exception.message };
    this.loggerService.error({ stack: exception.stack }, exception.stack);
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: validationResponse.message,
      error: validationResponse.error,
    });
  }
}
