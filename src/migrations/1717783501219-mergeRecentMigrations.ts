import { MigrationInterface, QueryRunner } from 'typeorm';

export class MergeRecentMigrations1717783501219 implements MigrationInterface {
  name = 'MergeRecentMigrations1717783501219';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "lastSeen" TIMESTAMP, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_message" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "messageId" integer NOT NULL, "initiatorId" integer NOT NULL, "recipientId" integer NOT NULL, "isMessageEdited" boolean NOT NULL DEFAULT false, "isMessageRead" boolean NOT NULL DEFAULT false, "initiatorMessageDeleted" boolean NOT NULL DEFAULT false, "recipientMessageDeleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_ade2c9df16283b1115688c8b714" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "message" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "text" character varying NOT NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD CONSTRAINT "FK_61d39f0f2a90a400aefe513abed" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD CONSTRAINT "FK_f12135f104a571263066929059c" FOREIGN KEY ("initiatorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" ADD CONSTRAINT "FK_a651dc28ad104c2e24e8a260515" FOREIGN KEY ("recipientId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP CONSTRAINT "FK_a651dc28ad104c2e24e8a260515"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP CONSTRAINT "FK_f12135f104a571263066929059c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_message" DROP CONSTRAINT "FK_61d39f0f2a90a400aefe513abed"`,
    );
    await queryRunner.query(`DROP TABLE "message"`);
    await queryRunner.query(`DROP TABLE "user_message"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
