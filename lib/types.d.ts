import { z } from 'zod';
export declare const pixelUnitZ: z.ZodNumber;
export type PixelUnit = z.infer<typeof pixelUnitZ>;
export declare const imageSizeZ: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
}, {
    width: number;
    height: number;
}>;
export type ImageSize = z.infer<typeof imageSizeZ>;
