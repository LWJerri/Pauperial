import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedLinks1633088284008 implements MigrationInterface {
  name = "AddedLinks1633088284008";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "links" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "link" character varying NOT NULL, "codeUses" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_ecf17f4a741d3c5ba0b4c5ab4b6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "links"`);
  }
}
