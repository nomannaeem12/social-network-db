import { IsNotEmpty } from 'class-validator';

export class CreateUserMessageDto {
  @IsNotEmpty()
  recipientId: number;

  @IsNotEmpty()
  text: string;
}
