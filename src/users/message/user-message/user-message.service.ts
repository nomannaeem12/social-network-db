import { Injectable } from '@nestjs/common';
import { CreateUserMessageDto } from './dto/create-user-message.dto';
import { UpdateUserMessageDto } from './dto/update-user-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMessage } from './entities/user-message.entity';
import { MessageService } from '../message.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserMessageService {
  constructor(
    @InjectRepository(UserMessage)
    private userMessageRepository: Repository<UserMessage>,
    private messageService: MessageService,
  ) {}

  async create(
    createUserMessageDto: CreateUserMessageDto,
    currentUser: User,
  ) {
    const userMessage = new UserMessage();
    const message = await this.messageService.create({
      text: createUserMessageDto.text,
    });
    userMessage.senderId = currentUser.id;
    userMessage.receiverId = createUserMessageDto.receiverId;
    userMessage.messageId = message.id;
    return await this.userMessageRepository.save(userMessage);
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
