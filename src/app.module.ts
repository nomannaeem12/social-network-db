import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerModule } from './shared/logger/logger.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthInterceptor } from './interceptor/auth.interceptor';

export const ormOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'dpg-cr1mv85umphs73afuo00-a.oregon-postgres.render.com', // Updated to your online host
  port: 5432,
  username: 'socail_c_user', // Updated to your online username
  password: '1ZMF2elYPT4mfjO6lA4iqaxw3XwpyrE6', // Updated to your online password
  database: 'socail_c', // Updated to your online database name
  logging: false,
  entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
  ssl: {
    rejectUnauthorized: false,
  }, // Enable SSL with a configuration that does not reject unauthorized certificates
};

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
})
export class AppModule {}
