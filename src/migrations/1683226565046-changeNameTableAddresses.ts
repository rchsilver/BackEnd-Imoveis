import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeNameTableAddresses1683226565046 implements MigrationInterface {
    name = 'ChangeNameTableAddresses1683226565046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "addressesId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "addressId" TO "addressesId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
