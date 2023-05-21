"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeNameTableAddresses1683226565046 = void 0;
class ChangeNameTableAddresses1683226565046 {
    constructor() {
        this.name = 'ChangeNameTableAddresses1683226565046';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a"`);
            yield queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "addressesId" TO "addressId"`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
            yield queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "addressId" TO "addressesId"`);
            yield queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.ChangeNameTableAddresses1683226565046 = ChangeNameTableAddresses1683226565046;
