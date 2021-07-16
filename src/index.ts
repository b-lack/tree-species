//import * as lat from '../lat.json';

import * as en from '../locales/en.json';
import * as de from '../locales/de.json';
import * as es from '../locales/es.json';

export function decode(speciesId:string, languageCode:string) {

    const langCode = languageCode.toLowerCase();

    if(langCode === 'en') return en[speciesId] || undefined
    if(langCode === 'de') return de[speciesId] || undefined
    if(langCode === 'es') return es[speciesId] || undefined
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

    const langCode = languageCode.toLowerCase();

    if(langCode === 'en') return encodeFromName(name, en)
    if(langCode === 'de') return encodeFromName(name, de)
    if(langCode === 'es') return encodeFromName(name, es)
    //if(languageCode === 'lat') return encodeFromName(name, lat)

    return null
}

export function getList(languageCode:string) {
    
    const langCode = languageCode.toLowerCase();

    if(langCode === 'en') return Object.entries(en);
    if(langCode === 'de') return Object.entries(de);
    if(langCode === 'es') return Object.entries(es);
    //if(languageCode === 'lat') return encodeFromName(name, lat)

    return null
}