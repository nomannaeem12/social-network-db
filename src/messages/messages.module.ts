import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UserMessagesModule } from '../users/user-messages/user-messages.module';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  exports: [MessagesService],
  imports: [TypeOrmModule.forFeature([Message]), UserMessagesModule],
})
export class MessagesModule {}
