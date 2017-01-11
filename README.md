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

### As a flat JSON files
```bash
propson flat 'sourcePropertiesDir/*.properties' --dir ./outputDir
```

### As nested JSON files
```bash
propson nested 'sourcePropertiesDir/*.properties' --dir ./outputDir
```


## JS usage
### Read and write from/to files
```js
import propson from 'propson';

propson('examples/*.properties', 'tmp', true);
```


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
