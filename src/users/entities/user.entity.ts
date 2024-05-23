import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/entities/BaseEntity';
import { UserMessage } from '../message/user-message/entities/user-message.entity';
@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({
    nullable: true,
  })
  lastSeen: Date;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true, select: false })
  resetToken: string;

  @Column({ nullable: true, select: false })
  resetTokenExpiration: Date;

  @OneToMany(() => UserMessage, (um) => um.receiver, { cascade: true })
  inbox: UserMessage[];

  @OneToMany(() => UserMessage, (um) => um.sender, { cascade: true })
  outbox: UserMessage[];
}