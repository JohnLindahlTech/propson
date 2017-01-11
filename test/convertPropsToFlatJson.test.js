import test from 'ava';
import convert from '../src/convertPropsToFlatJson.js';

const checkConvert = (t, input, expected)=> {
  const result = convert(input);
  t.deepEqual(result, expected);
}

test('Convert props to json', t => {
  const input = [
    'a=b',
    'c=d',
    'e=',
  ];
  const expected = {
    a: 'b',
    c: 'd',
    e: ''
  };
  checkConvert(t, input, expected);
});

test('should throw if passing faulty type', t => {
  t.throws(() => convert('faulty'), Error);
});

test('should throw if passing faulty array items', t => {
  t.throws(() => convert([1]), Error);
});

test('Ignore comments when converting', t => {
  const input = [
    'a=b',
    '# This is a comment',
    'c=d'
  ];
  const expected = {
    a: 'b',
    c: 'd'
  };
  checkConvert(t, input, expected);
});

test('Trims first', t => {
  const input = [
    'a=b ',
    ' # This is a comment',
    ' c=d ',
    ' e= '
  ];
  const expected = {
    a: 'b',
    c: 'd',
    e: ''
  };
  checkConvert(t, input, expected);
});

test('Trims keys and values', t => {
  const input = [
    'a = b ',
    '#This is a comment',
    ' c = d '
  ];
  const expected = {
    a: 'b',
    c: 'd'
  };
  checkConvert(t, input, expected);
});

test('Trims keys and values', t => {
  const input = [
    'a = b ',
    '#This is a comment',
    ' c = d '
  ];
  const expected = {
    a: 'b',
    c: 'd'
  };
  checkConvert(t, input, expected);
});

test('should treat rows without equal as key with empty value', t => {
  const input = [
    'a = b ',
    '#This is a comment',
    ' c = d ',
    'e'
  ];
  const expected = {
    a: 'b',
    c: 'd',
    e: ''
  };
  checkConvert(t, input, expected);
});

test('should only convert first equal ', t => {
  const input = [
    'a = b ',
    '#This is a comment',
    ' c = d = a',
    'e'
  ];
  const expected = {
    a: 'b',
    c: 'd = a',
    e: ''
  };
  checkConvert(t, input, expected);
});

test('should ignore empty rows', t => {
  const input = [
    'a=b',
    '',
    'c=d',
    '',
  ];
  const expected = {
    a: 'b',
    c: 'd',
  };
  checkConvert(t, input, expected);
});
