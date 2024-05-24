import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('filter')
  filteredUser(@Body() filterDto: { searchText: string }) {
    return this.usersService.filteredUser(filterDto);
  }

  @Get('')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':recipientId/get-messages')
  async getUserMessages(@Param('recipientId') recipientId: number, @Req() req: any) {
    return await this.usersService.getUserMessages(recipientId, req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return await this.usersService.updateUser(id, body);
  }
}