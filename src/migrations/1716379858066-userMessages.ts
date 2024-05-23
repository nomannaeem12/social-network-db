import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMessages1716379858066 implements MigrationInterface {
  name = 'UserMessages1716379858066';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "message" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "text" character varying NOT NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_message" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "messageId" integer NOT NULL, "senderId" integer NOT NULL, "receiverId" integer NOT NULL, CONSTRAINT "PK_ade2c9df16283b1115688c8b714" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD CONSTRAINT "FK_61d39f0f2a90a400aefe513abed" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD CONSTRAINT "FK_a77321d9afd37039d7e0d9cc083" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD CONSTRAINT "FK_e7fbaafa199a56563f136441279" FOREIGN KEY ("receiverId") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP CONSTRAINT "FK_e7fbaafa199a56563f136441279"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP CONSTRAINT "FK_a77321d9afd37039d7e0d9cc083"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP CONSTRAINT "FK_61d39f0f2a90a400aefe513abed"`,
    );
    await queryRunner.query(`DROP TABLE "user_message"`);
    await queryRunner.query(`DROP TABLE "message"`);
  }
}
