import { IsNotEmpty } from 'class-validator';

export class UserMessageDto {
  @IsNotEmpty()
  initiatorId: number;

  @IsNotEmpty()
  recipientId: number;
}
