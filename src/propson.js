import R from 'ramda';
import glob from 'glob-promise';
import contract from 'neat-contract';
import readFile from './readFile';
import writeFile from './writeFile';
import convertPropsToFlatJson from './convertPropsToFlatJson';
import convertPropsToNestedJson from './convertPropsToNestedJson';
import logger from './log';

const convert = R.curry((type, data) =>
  (type === 'nested' ? convertPropsToNestedJson(data) : convertPropsToFlatJson(data)));

const logSuccess = R.curry((log, fileName) => {
  log.success(`Propson wrote file -> ${fileName}`);
});

const handleFile = R.curry((log, type, outputDir, fileName) =>
  R.pipeP(
    readFile,
    convert(type),
    writeFile(outputDir, fileName),
    logSuccess(log),
  )(fileName));

export default function (sources, { _name: type, dir }) {
  contract('dir', String, dir);
  contract('sources', String, sources);
  return R.pipeP(
    glob,
    R.map(handleFile(logger, type, dir)),
  )(sources);
}
