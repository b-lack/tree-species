declare function getUserLanguageCode(languageCode: string): string;
declare function decode(speciesId: string, languageCode: string): any;
declare function encode(name: string, languageCode: string): string;
declare function getList(languageCode: string, countryCode: string): [
    string,
    unknown
][];
/**
 *
 * @param languageCode
 * @param countryCode
 * @returns
 */
declare function getListScientific(languageCode: string, countryCode: string): {
    latin: any;
    names: unknown;
}[];
declare function search(searchTerm: string, languageCode: string): {};
declare function getFirstList(languageCode: string): any;
declare function getEnum(languageCode: string): string[];
declare function getValues(languageCode: string): unknown[];
declare function getFirstValues(languageCode: string): any[];
declare function getColorFromId(str: any): string;
declare function getSpeciesLength(languageCode: string): number;
declare function getRandomSpeciesId(languageCode: string): string;
export { getUserLanguageCode, encode, decode, getList, getListScientific, getFirstList, getEnum, getValues, getFirstValues, getColorFromId, getSpeciesLength, getRandomSpeciesId, search };
