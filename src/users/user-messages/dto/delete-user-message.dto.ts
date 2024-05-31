import { IsNotEmpty } from 'class-validator';

export class DeleteUserMessageDto {
  @IsNotEmpty()
  deleteType: DeleteUserMessageType;
}
enum DeleteUserMessageType {
  DeleteInitiatedMessage = 'DeleteInitiatedMessage',
  DeleteRecipientMessage = 'DeleteRecipientMessage',
  DeleteForEveryone = 'DeleteForEveryone',
}
