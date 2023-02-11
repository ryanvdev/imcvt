"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readImageAsBuffer = exports.readImageAsBufferSync = exports.readImageAsBase64 = exports.readImageAsBase64Sync = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
function readImageAsBase64Sync(absolutePath) {
    const data = node_fs_1.default.readFileSync(absolutePath);
    return data.toString('base64');
}
exports.readImageAsBase64Sync = readImageAsBase64Sync;
async function readImageAsBase64(absolutePath) {
    return readImageAsBase64Sync(absolutePath);
}
exports.readImageAsBase64 = readImageAsBase64;
function readImageAsBufferSync(absolutePath) {
    const data = node_fs_1.default.readFileSync(absolutePath);
    return data;
}
exports.readImageAsBufferSync = readImageAsBufferSync;
async function readImageAsBuffer(absolutePath) {
    return readImageAsBufferSync(absolutePath);
}
exports.readImageAsBuffer = readImageAsBuffer;
