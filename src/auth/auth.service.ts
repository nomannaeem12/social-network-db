import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(private userServices: UsersService) {}

  async register(c: CreateUserDto) {
    c.password = await bcrypt.hash(c.password, 10);
    const user = await this.userServices.create(c);
    if (user) {
      const { password, ...userData } = user;
      return userData;
    }
  }
}
