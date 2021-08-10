//import lat from '../lat.json';

import en from '../locales/en.json';
import de from '../locales/de.json';
import es from '../locales/es.json';

const languages = {
    de:de,
    en:en,
    es:es
}
let defaultLanguage = 'en';

export function getUserLanguageCode(languageCode:string):string{
    if(typeof window != "undefined" && window.hasOwnProperty('navigator')){
        defaultLanguage = navigator.language.split('-')[0] || defaultLanguage; 
    }

    return languageCode ? languageCode.toLowerCase() : defaultLanguage;
}

export function decode(speciesId:string, languageCode:string) {

    const langCode = languageCode || getUserLanguageCode(languageCode);

    if(langCode === 'en') return en[speciesId.toString()] || undefined
    if(langCode === 'de') return de[speciesId.toString()] || undefined
    if(langCode === 'es') return es[speciesId.toString()] || undefined
    //if(languageCode === 'lat') return lat[speciesId] || undefined

    return null
}
function encodeFromName(name:string, obj){
    for(var i in obj){
        if(obj[i].find(element => element === name)) return i
    }
    return undefined
}
export function encode(name:string, languageCode:string) {

    const langCode = languageCode || getUserLanguageCode(languageCode);

    return encodeFromName(name, languages[langCode])
}

export function getList(languageCode:string) {
    
    const langCode = languageCode || getUserLanguageCode(languageCode);

    return Object.entries(languages[langCode]);
}
export function getFirstList(languageCode:string) {
    
    const langCode = languageCode || getUserLanguageCode(languageCode);

    let languageObj = Object.assign({}, languages[langCode]);
    
    Object.entries(languageObj).map(entry => languageObj[entry[0]] = entry[1][0]);

    return languageObj;
}

export function getEnum(languageCode:string) {
    
    const langCode = languageCode || getUserLanguageCode(languageCode);

    return Object.keys(languages[langCode]);
}
export function getValues(languageCode:string) {
    
    const langCode = languageCode || getUserLanguageCode(languageCode);

    return Object.values(languages[langCode]);
}
export function getFirstValues(languageCode:string) {
    
    const langCode = languageCode || getUserLanguageCode(languageCode);

    return Object.values(languages[langCode]).map(values => values[0]);
}

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

export function getColorFromId(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return intToRGB(hash);
} 

export function getSpeciesLength(languageCode:string) {

    const langCode = languageCode || getUserLanguageCode(languageCode);

    return Object.keys(languages[langCode]).length;
}

export function getRandomSpeciesId(languageCode:string) {

    let list:string[] = [];

    const langCode = languageCode || getUserLanguageCode(languageCode);

    if(langCode === 'en'){
        list = Object.keys(en);
    }else if(langCode === 'de'){
        list = Object.keys(de);
    }else if(langCode === 'es'){
        list = Object.keys(es);
    }
    
    return list[Math.floor(Math.random()*list.length)];

} 