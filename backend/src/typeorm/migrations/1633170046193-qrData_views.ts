import { MigrationInterface, QueryRunner } from "typeorm";

export class qrDataViews1633170046193 implements MigrationInterface {
  name = "qrDataViews1633170046193";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."links" DROP COLUMN "codeUses"`);
    await queryRunner.query(`ALTER TABLE "public"."links" ADD "views" integer NOT NULL DEFAULT '0'`);
    await queryRunner.query(`ALTER TABLE "public"."links" ADD "qrData" character varying NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."links" DROP COLUMN "qrData"`);
    await queryRunner.query(`ALTER TABLE "public"."links" DROP COLUMN "views"`);
    await queryRunner.query(`ALTER TABLE "public"."links" ADD "codeUses" integer NOT NULL DEFAULT '0'`);
  }
}
