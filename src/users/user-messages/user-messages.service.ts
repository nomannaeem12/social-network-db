import { Injectable } from '@nestjs/common';
import { CreateUserMessageDto } from './dto/create-user-message.dto';
import { UpdateUserMessageDto } from './dto/update-user-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMessage } from './entities/user-message.entity';
import { User } from '../entities/user.entity';
import { MessagesService } from '../../messages/messages.service';

@Injectable()
export class UserMessagesService {
  constructor(
    @InjectRepository(UserMessage)
    private userMessageRepository: Repository<UserMessage>,
    private messagesService: MessagesService,
  ) {}

  async create(createUserMessageDto: CreateUserMessageDto, currentUser: User) {
    const userMessage = new UserMessage();
    const message = await this.messagesService.create({
      text: createUserMessageDto.text,
    });
    userMessage.senderId = currentUser.id;
    userMessage.receiverId = createUserMessageDto.receiverId;
    userMessage.messageId = message.id;
    const savedMessage = await this.userMessageRepository.save(userMessage);
    return { ...savedMessage, message };
  }

  findAll() {
    return `This action returns all userMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userMessage`;
  }

  update(id: number, updateUserMessageDto: UpdateUserMessageDto) {
    return `This action updates a #${id} userMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} userMessage`;
  }
}
