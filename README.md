# propson

## installation
```bash
npm install -D propson
```
or
```bash
yarn add propson -D
```

## CLI usage

`propson [flat/nested] sourceGlob --dir outputDirectory`
* flat/nested - Pick the version of JSON output you want.
  * flat - `'a.b.c=d'` => `{"a.b.c" : "d"}`
  * nested - `'a.b.c=d'` => `{ "a" : { "b" : { "c" : "d" } } }`
* sourceGlob - A path to the files which you want to convert.
  * Accepts glob syntax
  * Remember to use '' (quotes) around your parameter, otherwise the glob will be expanded before actually sending it to propson.
* --dir / -d - A path to the directory to put the JSON files.
  * The directory must exist prior to propson execution.

Note: Propson will resolve against `process.cwd()` for relative paths. Recommendation is to use absolute paths as input.

### As flat JSON files
```bash
propson flat 'sourcePropertiesDir/*.properties' --dir './outputDir'
```

### As nested JSON files
```bash
propson nested 'sourcePropertiesDir/*.properties' --dir './outputDir'
```


## JS usage
### Read and write from/to files
```js
import propson from 'propson';

propson('examples/*.properties', 'tmp', true);
```

#### propson(sourceGlob, outputDir, isNested)
 * sourceGlob - Accepts a path string (with glob support)
 * outputDir - A directory (which already exists)
 * isNested - Set to true you want to expand the properties as nested JSON objects.


### Just the data-conversion
```js
import { convertPropsToFlatJson, convertPropsToNestedJson} from 'propson';

const arr = [
  'a=b',
  'c.d=e'
]

console.log('Flat:', convertPropsToFlatJson(arr));
console.log('Nested:', convertPropsToNestedJson(arr));

```
