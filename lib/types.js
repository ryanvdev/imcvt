"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSizeZ = exports.pixelUnitZ = void 0;
const zod_1 = require("zod");
exports.pixelUnitZ = zod_1.z.number().finite().int().nonnegative();
exports.imageSizeZ = zod_1.z.object({
    width: exports.pixelUnitZ,
    height: exports.pixelUnitZ,
});
