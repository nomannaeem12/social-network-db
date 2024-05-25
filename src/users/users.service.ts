import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ILike, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from '../auth/dto/login.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.lastSeen = new Date();
    return await this.userRepository.save(user);
  }

  async filteredUser(filteredDto: { searchText: string }) {
    return await this.userRepository.find({
      where: [
        { firstName: ILike(`%${filteredDto.searchText}%`) },
        { lastName: ILike(`%${filteredDto.searchText}%`) },
      ],
      take: 10,
    });
  }

  async signIn(user: LoginDto) {
    const dbUser = await this.userRepository.findOneOrFail({
      where: { email: user.email },
    });
    dbUser.lastSeen = new Date();
    await this.userRepository.save(dbUser);
    return dbUser;
  }

  findAll() {
    return this.userRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async getUserMessages(recipientId: number, currentUser: User) {
    const inboxMessages = await this.userRepository.findOne({
      where: {
        id: currentUser.id,
        inbox: { senderId: recipientId },
      },
      relations: { inbox: { message: true } },
      order: { inbox: { createdAt: 'DESC' } },
    });

    const outboxMessages = await this.userRepository.findOne({
      where: {
        id: currentUser.id,
        outbox: { receiverId: recipientId },
      },
      relations: { outbox: { message: true } },
      order: { outbox: { createdAt: 'DESC' } },
    });

    return {
      inbox: inboxMessages ? inboxMessages.inbox : [],
      outbox: outboxMessages ? outboxMessages.outbox : [],
    };
  }

  async findOneByEmail(
    email: string,
    selectPassword = false,
  ): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { email },
      select: { id: true, email: true, password: selectPassword },
    });
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async findOneForLogin(id: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    user.lastSeen = new Date();
    return await this.userRepository.save(user);
  }

  async updateUser(id: number, body: UpdateUserDto): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id } });
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;
    if (body.password) {
      user.password = await bcrypt.hash(body.password, 10);
    }
    return await this.userRepository.save(user);
  }
}
