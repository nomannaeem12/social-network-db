import { BaseEntity } from '../../shared/entities/BaseEntity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('account')
export class Account extends BaseEntity {
  @Column()
  userId: number;

  @OneToOne(() => User, (user) => user.account)
  @JoinColumn({ name: 'userId' })
  user: User;
}
