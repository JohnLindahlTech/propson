import R from 'ramda';
import fs from 'fs-promise';
import path from 'path';

const promisify = data => Promise.resolve(data);
const writeFile = R.curry((file, data) => fs.writeFile(file, data));
const convertToJson = R.curry((indentation, data) => JSON.stringify(data, null, indentation));
const resolvePath = R.curry((firstPath, secondPath) => path.resolve(firstPath, secondPath));
const resolveCwd = resolvePath(process.cwd());


export default R.curry((outputDir, filePath) => {
  const out = resolveCwd(outputDir);
  const file = path.parse(resolveCwd(filePath));
  const newFile = resolvePath(out, `${file.name}.json`);

  return R.pipeP(
    promisify,
    convertToJson(2),
    writeFile(newFile),
    () => newFile,
  );
});
