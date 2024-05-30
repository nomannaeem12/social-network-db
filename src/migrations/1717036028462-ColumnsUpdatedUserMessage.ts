import { MigrationInterface, QueryRunner } from 'typeorm';

export class ColumnsUpdatedUserMessage1717036028462
  implements MigrationInterface
{
  name = 'ColumnsUpdatedUserMessage1717036028462';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('user_message', 'senderId', 'initiatorId');
    await queryRunner.renameColumn('user_message', 'receiverId', 'recipientId');
    await queryRunner.renameColumn(
      'user_message',
      'isEdited',
      'isMessageEdited',
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD "isMessageRead" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD "isInitiatorMessageDeleted" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD "isRecipientMessageDeleted" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
