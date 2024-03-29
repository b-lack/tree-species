# Tree Species
This repository includes lists of tree species with corresponding translation. It is intended to support forest-specific software to get ready for internationalization.

## Install

Using npm:
```bash
npm i tree-species-i18n
```


Using CDN
```
https://cdn.jsdelivr.net/npm/tree-species-i18n@1.0.6/dist/index.esm.js
```
## Usage

```js
import * as treeSpeciesI18n from 'tree-species-i18n';

// Search for id by species name and language code (en, es, de or leave empty to get default user language in browser).
var treeNameToSearch = 'silver fir';
var treeSpeciesId = treeSpeciesI18n.encode(treeNameToSearch, 'en');

// Search for species name by id and language code 
var treeName = treeSpeciesI18n.decode(treeSpeciesId, 'es');

// Get tree list by language code
// Supported languages: en, es, de
var speciesArrayDe = treeSpeciesI18n.getList('de');
console.info('List of species (de): ', speciesArrayDe.length);

// Returns a list of tree species, in the selected language, that are native to the specified country code.
// Supported country codes: de, at, ch, se, fr, no, jp, uk, us
var speciesArrayDeJP = treeSpeciesI18n.getList('de', 'JP');
console.info('List of species (de) in JP: ', speciesArrayDeJP.length);

// Get color by species id
var speciesColor = treeSpeciesI18n.getColorFromId(treeSpeciesId);
console.info('%c Color by key: ' +speciesColor, 'color: #' + speciesColor);

// Get random tree species by language code
var randomSpeciesId = treeSpeciesI18n.getRandomSpeciesId('en');
console.info('Random species id (en): ' +randomSpeciesId);
```
## Examples

Node, Browser (CDN) and bundled [Examples](./examples).

## Structur

### Scientific Name
The [list](https://github.com/b-lack/tree-species/blob/main/lat.json) of scientific names includes about 58000 tree species. The scientific name should be unique. Nevertheless, it is recommended to use the unique ID offered for clear and short identification beyond your own software.

### Translations
The current [locales files](https://github.com/b-lack/tree-species/main/locales) include one ore more translations of the scientific name.

The length of the list of translations varies. Only species that provide a translation are listed.

## More languages
Create an [issue](https://github.com/b-lack/tree-species/issues) for feature or language requests.

## Credits
The scientific names are taken from [GlobalTreeSearch](https://tools.bgci.org/global_tree_search.php).

Translations are automatically generated using the [Wikipedia API](https://www.mediawiki.org/wiki/API).