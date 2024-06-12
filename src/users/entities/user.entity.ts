import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/entities/BaseEntity';
import { UserMessage } from '../user-messages/entities/user-message.entity';
import { Account } from '../../accounts/entities/account.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  lastSeen: Date;

  @Column({ select: false })
  password: string;

  @OneToMany(() => UserMessage, (um) => um.recipient, { cascade: true })
  inbox: UserMessage[];

  @OneToMany(() => UserMessage, (um) => um.initiator, { cascade: true })
  outbox: UserMessage[];

  @OneToMany(() => Account, (account) => account.user)
  account: Account;
}
