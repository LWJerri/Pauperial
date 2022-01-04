import { MigrationInterface, QueryRunner } from "typeorm";

export class addCreatedAt1641317427336 implements MigrationInterface {
  name = "addCreatedAt1641317427336";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."links" ADD "createdAt" TIMESTAMP DEFAULT now()`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."links" DROP COLUMN "createdAt"`);
  }
}
