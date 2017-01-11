# propson

## installation
```
npm install -D propson
```
or
```
yarn add propson -D
```

## CLI usage

### As a flat JSON files
```
propson flat 'sourcePropertiesDir/*.properties' --dir ./outputDir
```

### As nested JSON files
```
propson nested 'sourcePropertiesDir/*.properties' --dir ./outputDir
```


## JS usage
### Read and write from/to files
```
import propson from 'propson';

propson('examples/*.properties', 'tmp', true);
```

### Just the data-conversion
```
const arr = [
  'a=b',
  'c.d=e'
]

console.log('Flat:', convertPropsToFlatJson(arr));
console.log('Nested:', convertPropsToNestedJson(arr));

```
