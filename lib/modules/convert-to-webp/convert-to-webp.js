"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToWebp = void 0;
const axios_1 = __importDefault(require("axios"));
const global_1 = require("../../global");
const types_1 = require("./types");
function preprocessParams([_image, _configurations]) {
    let image;
    let configurations = [];
    // image
    switch (typeof _image) {
        case 'object': {
            image = _image.toString('base64');
            break;
        }
        case 'string': {
            image = _image;
            break;
        }
        default: {
            throw new Error('image phải là dạng ảnh được mã hóa thành base64 hoặc ở dạng binary');
        }
    }
    // configuration
    if (!_configurations) {
        configurations.push(types_1.configurationZ.parse({}));
    }
    else if (Array.isArray(_configurations)) {
        for (const item of _configurations) {
            configurations.push(types_1.configurationZ.parse(item));
        }
    }
    else {
        configurations.push(types_1.configurationZ.parse(_configurations));
    }
    return { image, configurations };
}
async function convertToWebp(_image, _configurations) {
    const { image, configurations } = preprocessParams([_image, _configurations]);
    const url = new URL(global_1.imageConverterConfig.host);
    url.pathname = global_1.imageConverterConfig.paths.convertToWebp;
    const formData = {
        image,
        configurations,
    };
    try {
        const res = await axios_1.default.post(url.toString(), formData, {
            headers: {
                Authorization: global_1.imageConverterConfig.authorization,
            },
        });
        if (res.status !== 200) {
            return undefined;
        }
        const resData = res.data;
        const data = resData.data.map((item) => {
            const image = Buffer.from(item.image, 'base64');
            return {
                image,
                quality: item.quality,
                size: item.size,
                fileSize: image.length,
            };
        });
        return {
            aspectRatio: resData.aspectRatio,
            size: resData.size,
            data: data,
        };
    }
    catch (e) {
        return undefined;
    }
}
exports.convertToWebp = convertToWebp;
