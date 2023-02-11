/// <reference types="node" />
import { ImageSize } from '../../types';
import { Configuration } from './types';
type ConfigurationPartial = Partial<Configuration>;
export type ConvertToWebpReturn = {
    aspectRatio: number;
    size: ImageSize;
    data: {
        image: Buffer;
        quality: number;
        size: ImageSize;
        fileSize: number;
    }[];
};
export declare function convertToWebp(_image: string | Buffer, _configurations?: ConfigurationPartial | ConfigurationPartial[]): Promise<ConvertToWebpReturn | undefined>;
export {};
