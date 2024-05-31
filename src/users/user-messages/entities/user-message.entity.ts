import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/BaseEntity';
import { Message } from '../../../messages/entities/message.entity';
import { User } from '../../entities/user.entity';
@Entity()
export class UserMessage extends BaseEntity {
  @Column()
  messageId: number;

  @Column()
  initiatorId: number;

  @Column()
  recipientId: number;

  @Column({ default: false })
  isMessageEdited: boolean;

  @Column({ default: false })
  isMessageRead: boolean;

  @Column({ default: false, select: false })
  initiatorMessageDeleted: boolean;

  @Column({ default: false, select: false })
  recipientMessageDeleted: boolean;

  @ManyToOne(() => Message, (m) => m.userMessages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'messageId' })
  message: Message;

  @ManyToOne(() => User, (u) => u.outbox, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'initiatorId' })
  initiator: User;

  @ManyToOne(() => User, (u) => u.inbox, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recipientId' })
  recipient: User;
}