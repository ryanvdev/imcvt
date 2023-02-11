"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
const zod_1 = require("zod");
const global_1 = require("../../global");
const configPropsZ = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    host: zod_1.z.string().url(),
    paths: zod_1.z
        .object({
        convertToWebp: zod_1.z.string().default('/convert-to-webp'),
        convertToJpeg: zod_1.z.string().default('/convert-to-jpeg'),
    })
        .default({}),
});
function config(props = {}) {
    const { username, password, host, paths } = configPropsZ.parse(props);
    global_1.imageConverterConfig.host = host;
    global_1.imageConverterConfig.paths = paths;
    global_1.imageConverterConfig.authorization =
        'Basic ' +
            node_crypto_1.default.createHash('sha256').update([username, password].join(':')).digest('base64');
}
exports.config = config;
