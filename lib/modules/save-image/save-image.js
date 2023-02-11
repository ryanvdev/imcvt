"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImage = exports.saveImageSync = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
function preprocessFilepath(absolutePath, extension) {
    if (!extension)
        return absolutePath;
    const basename = node_path_1.default.basename(absolutePath);
    const dirname = node_path_1.default.dirname(absolutePath);
    let newBasename;
    let extensionStand;
    if (extension.startsWith('.')) {
        extensionStand = extension.toLowerCase();
    }
    else {
        extensionStand = '.' + extension.toLowerCase();
    }
    const lastIndexOfDot = basename.lastIndexOf('.');
    if (lastIndexOfDot <= 0) {
        newBasename = basename + extensionStand;
    }
    else {
        newBasename = basename.slice(0, lastIndexOfDot) + extensionStand;
    }
    return node_path_1.default.join(dirname, newBasename);
}
function saveImageSync(absolutePath, data, extension) {
    let fileData;
    let filePath = preprocessFilepath(absolutePath, extension);
    if (typeof data === 'string') {
        fileData = Buffer.from(data, 'base64');
    }
    else if (data instanceof Buffer) {
        fileData = data;
    }
    else {
        throw new Error('Invalid image');
    }
    node_fs_1.default.writeFileSync(filePath, fileData, { encoding: 'binary' });
    return filePath;
}
exports.saveImageSync = saveImageSync;
async function saveImage(absolutePath, data, extension) {
    return saveImageSync(absolutePath, data, extension);
}
exports.saveImage = saveImage;
