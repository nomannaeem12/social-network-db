import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenamingUserMessageColumns1717136034741
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      'user_message',
      'isInitiatorMessageDeleted',
      'initiatorMessageDeleted',
    );
    await queryRunner.renameColumn(
      'user_message',
      'isRecipientMessageDeleted',
      'recipientMessageDeleted',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
