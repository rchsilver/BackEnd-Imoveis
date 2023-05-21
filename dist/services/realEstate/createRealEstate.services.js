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
exports.createRealEstateService = void 0;
const data_source_1 = require("../../data-source");
const entities_1 = require("../../entities");
const error_1 = require("../../error");
const address_schema_1 = require("../../schemas/address.schema");
const realEstate_schema_1 = require("../../schemas/realEstate.schema");
const createRealEstateService = (realEstateData) => __awaiter(void 0, void 0, void 0, function* () {
    const realEstateRepository = data_source_1.AppDataSource.getRepository(entities_1.RealEstate);
    const addressRepository = data_source_1.AppDataSource.getRepository(entities_1.Address);
    const categoryRepository = data_source_1.AppDataSource.getRepository(entities_1.Category);
    const addressValidated = address_schema_1.addressSchemaRequest.parse(realEstateData.address);
    const { state, street, city, number, zipCode } = realEstateData.address;
    if (number) {
        const getAddress = yield addressRepository.findOneBy({
            state,
            street,
            city,
            number,
            zipCode,
        });
        if (getAddress)
            throw new error_1.AppError("Address already exists", 409);
    }
    const address = addressRepository.create(addressValidated);
    yield addressRepository.save(address);
    const id = realEstateData.categoryId;
    const category = yield categoryRepository.findOneBy({ id });
    if (!category)
        throw new error_1.AppError("Category not found", 404);
    const createRealEstate = realEstateRepository.create(Object.assign(Object.assign({}, realEstateData), { address,
        category }));
    yield realEstateRepository.save(createRealEstate);
    const realEstateValidated = realEstate_schema_1.realEstateSchema.parse(createRealEstate);
    return realEstateValidated;
});
exports.createRealEstateService = createRealEstateService;
