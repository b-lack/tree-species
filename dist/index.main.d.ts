declare function getUserLanguageCode(languageCode: string): string;
declare function decode(speciesId: string, languageCode: string): any;
declare function encode(name: string, languageCode: string): string;
declare function getList(languageCode: string, countryCode: string): [
    string,
    unknown
][];
declare function getFirstList(languageCode: string): any;
declare function getEnum(languageCode: string): string[];
declare function getValues(languageCode: string): unknown[];
declare function getFirstValues(languageCode: string): any[];
declare function getColorFromId(str: any): string;
export { getUserLanguageCode, encode, decode, getList, getFirstList, getEnum, getValues, getFirstValues, getColorFromId };
