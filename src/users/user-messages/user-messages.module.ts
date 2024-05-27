import { forwardRef, Module } from '@nestjs/common';
import { UserMessagesService } from './user-messages.service';
import { UserMessagesController } from './user-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMessage } from './entities/user-message.entity';
import { MessagesModule } from '../../messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserMessage]),
    forwardRef(() => MessagesModule),
  ],
  controllers: [UserMessagesController],
  providers: [UserMessagesService],
})
export class UserMessagesModule {}
