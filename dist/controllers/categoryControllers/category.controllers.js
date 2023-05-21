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
exports.listRealEstateByCategoriesController = exports.listenCategoriesController = exports.createCategoryController = void 0;
const services_1 = require("../../services");
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body;
    const newCategory = yield (0, services_1.createCategoryService)(categoryData);
    return res.status(201).json(newCategory);
});
exports.createCategoryController = createCategoryController;
const listenCategoriesController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCategories = yield (0, services_1.listenCategoriesServices)();
    return res.status(200).json(listCategories);
});
exports.listenCategoriesController = listenCategoriesController;
const listRealEstateByCategoriesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const listRealEstateByCategory = yield (0, services_1.listRealEstateByCategoryServices)(id);
    return res.status(200).json(listRealEstateByCategory);
});
exports.listRealEstateByCategoriesController = listRealEstateByCategoriesController;
