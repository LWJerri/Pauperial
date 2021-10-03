import { MigrationInterface, QueryRunner } from "typeorm";

export class removeQrData1633207651479 implements MigrationInterface {
  name = "removeQrData1633207651479";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."links" DROP COLUMN "qrData"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."links" ADD "qrData" character varying NOT NULL`);
  }
}
