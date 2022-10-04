//import lat from '../lat.json';

//navigator.language = 'en-US';

import en from '../locales/en.json';
import de from '../locales/de.json';
import es from '../locales/es.json';

const languages = {
    de: de,
    en: en,
    es: es
}

import de_country from '../country/de.json';
import se_country from '../country/se.json';
import at_country from '../country/at.json';
import ch_country from '../country/ch.json';
import fr_country from '../country/fr.json';
import no_country from '../country/no.json';
import jp_country from '../country/jp.json';
import uk_country from '../country/uk.json';
import us_country from '../country/us.json';

const countries = {
    de: de_country,
    se: se_country,
    at: at_country,
    ch: ch_country,
    fr: fr_country,
    no: no_country,
    jp: jp_country,
    uk: uk_country,
    us: us_country
}

let defaultLanguage = 'en';
let defaultCountry = 'us';

export function getUserLanguageCode(languageCode:string):string{
    if(typeof window != "undefined" && window.hasOwnProperty('navigator')){
        defaultLanguage = navigator.language.split('-')[0].toLocaleLowerCase() || defaultLanguage; 
        defaultCountry = navigator.language.split('-')[1].toLocaleLowerCase() || defaultCountry; 
    }

    return languageCode ? languageCode.toLowerCase() : defaultLanguage;
}

export function decode(speciesId:string, languageCode:string) {

    const langCode = languageCode || getUserLanguageCode(languageCode);

    if(langCode === 'en') return en[speciesId.toString()] || undefined
    if(langCode === 'de') return de[speciesId.toString()] || undefined
    if(langCode === 'es') return es[speciesId.toString()] || undefined
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

export function getList(languageCode:string, countryCode:string) {
    
    const langCode = languageCode || getUserLanguageCode(languageCode);

    let list = languages[langCode];

    if(countryCode){
        const newList = {};
        const countryList = countries[countryCode.toLowerCase()];
        if(countryList){
            for(const [key, value] of Object.entries(countryList)){
                
                const treeSpecies = list[key];
                
                if(!treeSpecies)
                    newList[key] = [value];
                else
                    newList[key] = treeSpecies;

                    
            }
        }

        list = newList;
    }
    return Object.entries(list);
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