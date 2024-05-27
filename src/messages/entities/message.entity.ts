import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../shared/entities/BaseEntity';
import { UserMessage } from '../../users/user-messages/entities/user-message.entity';

@Entity()
export class Message extends BaseEntity {
  @Column()
  text: string;

  @OneToMany(() => UserMessage,(um)=>um.message,{ onDelete: 'CASCADE' })
  userMessages: UserMessage[];
}
