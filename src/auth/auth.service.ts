import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { EmailNotFoundException } from './exceptions/email.exception';
import { InvalidPasswordException } from './exceptions/password.exception';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email, true);
    if (!user) throw new EmailNotFoundException();
    const checkPasswordValid = await bcrypt.compare(pass, user.password);
    if (!checkPasswordValid) throw new InvalidPasswordException();
    const { password, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.signIn(loginDto);
    return {
      access_token: this.jwtService.sign({ ...user }),
      user,
    };
  }

  async register(c: CreateUserDto) {
    c.password = await bcrypt.hash(c.password, 10);
    return await this.usersService.create(c);
  }

  async decodeToken(token: any): Promise<User> {
    const decodedToken = this.jwtService.decode(token) as any;
    if (!decodedToken && !decodedToken.id) {
      throw new Error('unauthorized');
    }
    return await this.usersService.findOneForLogin(decodedToken.id);
  }
}
