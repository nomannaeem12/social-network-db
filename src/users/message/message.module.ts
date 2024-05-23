import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UserMessageModule } from './user-message/user-message.module';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
  imports: [TypeOrmModule.forFeature([Message]), UserMessageModule],
})
export class MessageModule {}
