import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMessagesRelation1716575093600 implements MigrationInterface {
    name = 'UserMessagesRelation1716575093600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_message" DROP CONSTRAINT "FK_e7fbaafa199a56563f136441279"`);
        await queryRunner.query(`ALTER TABLE "user_message" ADD CONSTRAINT "FK_e7fbaafa199a56563f136441279" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_message" DROP CONSTRAINT "FK_e7fbaafa199a56563f136441279"`);
        await queryRunner.query(`ALTER TABLE "user_message" ADD CONSTRAINT "FK_e7fbaafa199a56563f136441279" FOREIGN KEY ("receiverId") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
