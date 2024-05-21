import {
  Column, JoinColumn, OneToOne,
} from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from '../../users/entities/user.entity';

export class TrackableBaseEntity extends BaseEntity {
  @Column()
  createdBy: number;

  @Column({ nullable: true })
  updatedBy: number;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'createdBy' })
  createdByUser: User;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'updatedBy' })
  updatedByUser: User;
}
