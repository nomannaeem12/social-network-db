import { MigrationInterface, QueryRunner } from 'typeorm';

export class IsEditedColumnInUserMessageEntity1716858567295
  implements MigrationInterface
{
  name = 'IsEditedColumnInUserMessageEntity1716858567295';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "resetToken" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "resetTokenExpiration" TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD "isEdited" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP COLUMN "isEdited"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "resetTokenExpiration"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "resetToken"`);
  }
}
