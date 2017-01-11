import fs from 'fs-promise';
import R from 'ramda';

const readFile = filePath => fs.readFile(filePath, { encoding: 'utf8' });

export default R.pipeP(
    readFile,
    R.split('\n'),
  );
