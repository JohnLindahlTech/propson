import contract from 'neat-contract';
import R from 'ramda';

const defaultSeparator = '=';
const defaultCommentChar = '#';

const stringBeginsWith = R.curry((char, str) => str.startsWith(char));
const filterComments = char => R.filter(R.complement(stringBeginsWith(char)));
const filterEmptyLines = R.filter(R.complement(R.isEmpty));
const trimAll = R.map(R.trim);

const ensureSingleSplit = R.curry((separator, arr) => {
  const key = arr[0];
  const values = R.pipe(
    R.drop(1),
    R.join(defaultSeparator),
  )(arr);
  return [key, values];
});

const splitFirst = R.curry((separator, str) => R.pipe(
    R.split(separator),
    ensureSingleSplit(separator),
  )(str));

export default R.pipe(
  contract('arr', Array),
  R.map(contract('arr[item]', String)),
  trimAll,
  filterComments(defaultCommentChar),
  filterEmptyLines,
  R.map(R.pipe(
    splitFirst(defaultSeparator),
    trimAll,
  )),
  R.fromPairs,
  R.mergeAll,
);
