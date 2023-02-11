import { z } from 'zod';
declare const configPropsZ: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    host: z.ZodString;
    paths: z.ZodDefault<z.ZodObject<{
        convertToWebp: z.ZodDefault<z.ZodString>;
        convertToJpeg: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        convertToWebp: string;
        convertToJpeg: string;
    }, {
        convertToWebp?: string | undefined;
        convertToJpeg?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    host: string;
    paths: {
        convertToWebp: string;
        convertToJpeg: string;
    };
}, {
    paths?: {
        convertToWebp?: string | undefined;
        convertToJpeg?: string | undefined;
    } | undefined;
    username: string;
    password: string;
    host: string;
}>;
export type ConfigProps = z.infer<typeof configPropsZ>;
export declare function config(props?: Partial<ConfigProps>): void;
export {};
