"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleSchemaRequest = exports.scheduleSchema = void 0;
const zod_1 = require("zod");
const scheduleSchema = zod_1.z.object({
    id: zod_1.z.number(),
    date: zod_1.z.string(),
    hour: zod_1.z.string(),
    realEstateId: zod_1.z.number(),
    userId: zod_1.z.number(),
});
exports.scheduleSchema = scheduleSchema;
const scheduleSchemaRequest = scheduleSchema.omit({ id: true, userId: true });
exports.scheduleSchemaRequest = scheduleSchemaRequest;
