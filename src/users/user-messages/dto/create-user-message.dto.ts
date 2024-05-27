import { IsNotEmpty } from 'class-validator';

export class CreateUserMessageDto {
  @IsNotEmpty()
  receiverId: number;

  @IsNotEmpty()
  text: string;
}
