import R from 'ramda';
import convertFlat from './convertPropsToFlatJson';

const defaultNestingSeparator = '.';

const createObject = R.curry((value, path) =>
  R.set(R.lensPath(path), value, {}));

const createNestedObject = R.curry((nestingSeparator, [key, value]) =>
  R.pipe(
    R.split(nestingSeparator),
    createObject(value),
  )(key),
);

const deepMerge = (a, b) =>
 ((R.is(Object, a) && R.is(Object, b)) ? R.mergeWith(deepMerge, a, b) : b);

export default R.pipe(
  convertFlat,
  R.toPairs,
  R.map(R.pipe(
    createNestedObject(defaultNestingSeparator),
  )),
  R.reduce(deepMerge, {}),
);
