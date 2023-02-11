/// <reference types="node" />
export declare function saveImageSync(absolutePath: string, data: Buffer | string, extension?: string): string;
export declare function saveImage(absolutePath: string, data: Buffer | string, extension?: string): Promise<string>;
