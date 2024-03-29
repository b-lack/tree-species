export declare function getUserLanguageCode(languageCode: string): string;
export declare function decode(speciesId: string, languageCode: string): any;
export declare function encode(name: string, languageCode: string): string;
export declare function getList(languageCode: string, countryCode: string): [string, unknown][];
/**
 *
 * @param languageCode
 * @param countryCode
 * @returns
 */
export declare function getListScientific(languageCode: string, countryCode: string): {
    latin: any;
    names: unknown;
}[];
export declare function search(searchTerm: string, languageCode: string): {};
export declare function getFirstList(languageCode: string): any;
export declare function getEnum(languageCode: string): string[];
export declare function getValues(languageCode: string): unknown[];
export declare function getFirstValues(languageCode: string): any[];
export declare function getColorFromId(str: any): string;
export declare function getSpeciesLength(languageCode: string): number;
export declare function getRandomSpeciesId(languageCode: string): string;
