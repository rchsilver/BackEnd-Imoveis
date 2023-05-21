import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTableRealEstate1683381326588 implements MigrationInterface {
    name = 'FixTableRealEstate1683381326588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
