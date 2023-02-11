"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationZ = void 0;
const zod_1 = require("zod");
exports.configurationZ = zod_1.z.object({
    width: zod_1.z
        .number()
        .int('Phải là một số tự nhiên lớn hơn 0')
        .positive('Phải là một số tự nhiên lớn hơn 0')
        .optional(),
    /**
     * Là một số nguyên từ 1 -> 100
     * Default: 80
     */
    quality: zod_1.z
        .number()
        .int('Phải là một số tự nhiên [1; 100]')
        .min(1, 'Phải là một số tự nhiên [1; 100]')
        .max(100, 'Phải là một số tự nhiên [1; 100]')
        .default(80),
    /**
     * True: Bảo toàn hệ màu RGBA nếu có.
     * False: Chuyển ảnh từ hệ màu RGBA => RGB nếu ảnh.
     */
    exact: zod_1.z.boolean().default(false),
    /**
     * Chất lượng/tốc độ
     * 0 = Tốc độ nhanh - Tệp có dung lượng lớn hơn,
     * 6 = Tốc độ chậm  - Tệp có dung lượng nhỏ hơn
     * Default: 4
     */
    method: zod_1.z
        .number()
        .int('Phải là một số tự nhiên [0; 6]')
        .min(0, 'Phải là một số tự nhiên [0; 6]')
        .max(6, 'Phải là một số tự nhiên [0; 6]')
        .default(4),
});
