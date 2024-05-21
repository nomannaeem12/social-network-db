import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../shared/entities/BaseEntity';
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
}
