export type ExtractKey<O extends Object, K extends keyof O> = O[K];
export declare const imageConverterConfig: {
    authorization: string;
    host: string;
    paths: {
        convertToWebp: string;
        convertToJpeg: string;
    };
};
