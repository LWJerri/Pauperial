import { MigrationInterface, QueryRunner } from "typeorm";

export class chnageime1641368103725 implements MigrationInterface {
  name = "chnageime1641368103725";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "links" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "links" ADD "createdAt" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "links" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "links" ADD "createdAt" TIMESTAMP DEFAULT now()`);
  }
}
