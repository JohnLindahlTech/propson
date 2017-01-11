import propson, { convertPropsToFlatJson, convertPropsToNestedJson} from '../src';

propson('examples/*.properties', 'tmp', true);

const arr = [
  'a=b',
  'c.d=e'
]

console.log('Flat:', convertPropsToFlatJson(arr));
console.log('Nested:', convertPropsToNestedJson(arr));
