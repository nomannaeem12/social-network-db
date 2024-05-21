import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
const logger = {
  debug: jest.fn(),
  log: jest.fn()
};

// IMPORTANT First mock winston
jest.mock("winston", () => ({
  format: {
    colorize: jest.fn(),
    combine: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    json: jest.fn(),
    errors: jest.fn(),
  },
  createLogger: jest.fn().mockReturnValue(logger),
  transports: {
    Console: jest.fn()
  }
}));

// IMPORTANT import the mock after
import * as winston from "winston";
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let loggerMock: winston.Logger;
  let service: LoggerService;

  beforeEach(async () => {
    const mockCreateLogger = jest.spyOn(winston, "createLogger");
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService, ConfigService],
    }).compile();
    loggerMock = mockCreateLogger.mock.instances[0];
    // expect(mockCreateLogger).toHaveBeenCalled();

    service = await module.resolve<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
