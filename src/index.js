"use strict";
exports.__esModule = true;
exports.encode = void 0;
var lat = require("../lat.json");
var en = require("../locales/en.json");
var de = require("../locales/de.json");
var es = require("../locales/es.json");
function decode(speciesId, languageCode) {
    if (languageCode === 'en')
        return en[speciesId] || undefined;
    if (languageCode === 'de')
        return de[speciesId] || undefined;
    if (languageCode === 'es')
        return es[speciesId] || undefined;
    if (languageCode === 'lat')
        return lat[speciesId] || undefined;
    return null;
}
exports["default"] = decode;
function encodeFromName(name, obj) {
    for (var i in obj) {
        if (obj[i].find(function (element) { return element === name; }))
            return i;
    }
    return undefined;
}
function encode(name, languageCode) {
    if (languageCode === 'en')
        return encodeFromName(name, en);
    if (languageCode === 'de')
        return encodeFromName(name, de);
    if (languageCode === 'es')
        return encodeFromName(name, es);
    if (languageCode === 'lat')
        return encodeFromName(name, lat);
    return null;
}
exports.encode = encode;
