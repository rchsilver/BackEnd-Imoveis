import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeValueOfRealEstate1683226864389 implements MigrationInterface {
    name = 'ChangeTypeValueOfRealEstate1683226864389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
