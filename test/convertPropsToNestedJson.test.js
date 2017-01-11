import test from 'ava';
import convert from '../src/convertPropsToNestedJson.js';

const checkConvert = (t, input, expected)=> {
  const result = convert(input);
  t.deepEqual(result, expected);
}

test('Convert props to json', t => {
  const input = [
    'a.b.c=d',
    'a.b.e=f',
    'g=h'
  ];
  const expected = {
    a: {
      b: {
        c: 'd',
        e: 'f',
      },
    },
    g: 'h',
  };
  checkConvert(t, input, expected);
});
