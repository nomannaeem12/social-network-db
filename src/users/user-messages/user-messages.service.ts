import { Injectable } from '@nestjs/common';
import { CreateUserMessageDto } from './dto/create-user-message.dto';
import { UpdateUserMessageDto } from './dto/update-user-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMessage } from './entities/user-message.entity';
import { User } from '../entities/user.entity';
import { MessagesService } from '../../messages/messages.service';
import { UserMessageDto } from './dto/user-message.dto';
import { DeleteUserMessageDto } from './dto/delete-user-message.dto';

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
    userMessage.initiatorId = currentUser.id;
    userMessage.recipientId = createUserMessageDto.recipientId;
    userMessage.messageId = message.id;
    const savedUserMessage = await this.userMessageRepository.save(userMessage);
    return { ...savedUserMessage, message };
  }

  async getUserMessages(userMessageDto: UserMessageDto) {
    const { recipientId, initiatorId } = userMessageDto;
    const inboxMessages = await this.userMessageRepository.find({
      where: {
        initiatorId: recipientId,
        recipientId: initiatorId,
        recipientMessageDeleted: false,
      },
      relations: { message: true },
      order: { createdAt: 'DESC' },
    });

    const outboxMessages = await this.userMessageRepository.find({
      where: {
        initiatorId: initiatorId,
        recipientId: recipientId,
        initiatorMessageDeleted: false,
      },
      relations: { message: true },
      order: { createdAt: 'DESC' },
    });

    return {
      inbox: inboxMessages ?? [],
      outbox: outboxMessages ?? [],
    };
  }

  findAll() {
    return `This action returns all userMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userMessage`;
  }

  async update(id: number, updateUserMessageDto: UpdateUserMessageDto) {
    const userMessage = await this.userMessageRepository.findOne({
      where: { id },
    });
    const message = await this.messagesService.update(userMessage.messageId, {
      text: updateUserMessageDto.text,
    });
    userMessage.isMessageEdited = true;
    const updatedUserMessage = await this.userMessageRepository.save(
      userMessage,
    );
    return { ...updatedUserMessage, message };
  }

  async deleteMessage(id: number, deleteUserMessageDto: DeleteUserMessageDto) {
    const userMessage = await this.userMessageRepository.findOne({
      where: { id },
    });
    if (deleteUserMessageDto.deleteType === 'DeleteForEveryone')
      return await this.messagesService.remove(userMessage.messageId);
    if (deleteUserMessageDto.deleteType === 'DeleteInitiatedMessage')
      userMessage.initiatorMessageDeleted = true;
    if (deleteUserMessageDto.deleteType === 'DeleteRecipientMessage')
      userMessage.recipientMessageDeleted = true;
    return this.userMessageRepository.save(userMessage);
  }

  async remove(id: number) {
    return await this.userMessageRepository.delete(id);
  }
}
