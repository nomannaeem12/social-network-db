import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserMessagesService } from './user-messages.service';
import { CreateUserMessageDto } from './dto/create-user-message.dto';
import { UpdateUserMessageDto } from './dto/update-user-message.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { UserMessageDto } from './dto/user-message.dto';
import { DeleteUserMessageDto } from './dto/delete-user-message.dto';

@UseGuards(JwtAuthGuard)
@Controller('user-message')
export class UserMessagesController {
  constructor(private readonly userMessagesService: UserMessagesService) {}

  @Post()
  create(@Body() createUserMessageDto: CreateUserMessageDto, @Req() req: any) {
    return this.userMessagesService.create(createUserMessageDto, req.user);
  }

  @Post('filteredUserMessages')
  async getUserMessages(@Body() userMessageDto: UserMessageDto) {
    return await this.userMessagesService.getUserMessages(userMessageDto);
  }

  @Post('deleteUserMessage/:id')
  async deleteUserMessage(
    @Param('id') id: string,
    @Body() deleteUserMessageDto: DeleteUserMessageDto,
  ) {
    return await this.userMessagesService.deleteMessage(
      +id,
      deleteUserMessageDto,
    );
  }

  @Get()
  findAll() {
    return this.userMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserMessageDto: UpdateUserMessageDto,
  ) {
    return this.userMessagesService.update(+id, updateUserMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMessagesService.remove(+id);
  }
}
