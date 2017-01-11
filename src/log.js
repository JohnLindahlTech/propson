import R from 'ramda';
import chalk from 'chalk';

const log = console;
const Logger = {
  error: (...args) => log.error(chalk.red(args)),
  success: (...args) => log.info(chalk.green(args)),
  info: (...args) => log.info(chalk.blue(args)),
  debug: (...args) => log.debug(chalk.gray(args)),
  log: (...args) => log.log(args),
};

export const tapLog = R.tap(x => Logger.debug(x));

export default Logger;
