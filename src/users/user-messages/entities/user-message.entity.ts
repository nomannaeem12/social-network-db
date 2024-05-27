import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/BaseEntity';
import { Message } from '../../../messages/entities/message.entity';
import { User } from '../../entities/user.entity';
@Entity()
export class UserMessage extends BaseEntity {
  @Column()
  messageId: number;

  @Column()
  senderId: number;

  @Column()
  receiverId: number;

  @ManyToOne(() => Message, (m) => m.userMessages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'messageId' })
  message: Message;

  @ManyToOne(() => User, (u) => u.outbox, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'senderId' })
  sender: User;

  @ManyToOne(() => User, (u) => u.inbox, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'receiverId' })
  receiver: User;
}
