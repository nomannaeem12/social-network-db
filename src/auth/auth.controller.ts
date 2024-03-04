import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('register')
  register(@Body() r: CreateUserDto) {
    return this.authServices.register(r);
  }
}
