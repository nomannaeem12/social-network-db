import { forwardRef, Module } from '@nestjs/common';
import { UserMessageService } from './user-message.service';
import { UserMessageController } from './user-message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMessage } from './entities/user-message.entity';
import { MessageModule } from '../message.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserMessage]),
    forwardRef(() => MessageModule),
  ],
  controllers: [UserMessageController],
  providers: [UserMessageService],
})
export class UserMessageModule {}
