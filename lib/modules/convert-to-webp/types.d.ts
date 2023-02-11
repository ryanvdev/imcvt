import { z } from 'zod';
export interface ResponseData {
    /**
     * - width/height
     */
    aspectRatio: number;
    /**
     * Kích thước gốc của ảnh được tải lên
     */
    size: {
        width: number;
        height: number;
    };
    data: {
        /**
         * Ảnh được mã hóa thành dạng base64
         */
        image: string;
        /**
         * Chất lượng của ảnh được mã hóa
         * 1 -> 100
         */
        quality: number;
        /**
         * Kích thước của ảnh sau khi convert
         */
        size: {
            width: number;
            height: number;
        };
    }[];
}
export declare const configurationZ: z.ZodObject<{
    width: z.ZodOptional<z.ZodNumber>;
    /**
     * Là một số nguyên từ 1 -> 100
     * Default: 80
     */
    quality: z.ZodDefault<z.ZodNumber>;
    /**
     * True: Bảo toàn hệ màu RGBA nếu có.
     * False: Chuyển ảnh từ hệ màu RGBA => RGB nếu ảnh.
     */
    exact: z.ZodDefault<z.ZodBoolean>;
    /**
     * Chất lượng/tốc độ
     * 0 = Tốc độ nhanh - Tệp có dung lượng lớn hơn,
     * 6 = Tốc độ chậm  - Tệp có dung lượng nhỏ hơn
     * Default: 4
     */
    method: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    width?: number | undefined;
    exact: boolean;
    quality: number;
    method: number;
}, {
    exact?: boolean | undefined;
    width?: number | undefined;
    quality?: number | undefined;
    method?: number | undefined;
}>;
export type Configuration = z.infer<typeof configurationZ>;
export interface FormData {
    /**
     * Ảnh được mã hóa thành base64.
     */
    image: string;
    /**
     * Danh sách các cấu hình
     */
    configurations: Configuration[];
}
