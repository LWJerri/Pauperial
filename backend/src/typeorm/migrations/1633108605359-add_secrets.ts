import {MigrationInterface, QueryRunner} from "typeorm";

export class addSecrets1633108605359 implements MigrationInterface {
    name = 'addSecrets1633108605359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."links" ADD "secret" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."links" DROP COLUMN "secret"`);
    }

}
