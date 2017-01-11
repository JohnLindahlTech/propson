#!/usr/bin/env node

import program from 'commander';

program
  .command('flat <sources>')
  .option('-d, --dir <path>', 'Output directory of JSON files')
  .action(require('./propson').default);

program
    .command('nested  <sources>')
    .option('-d, --dir <path>', 'Output directory of JSON files')
    .action(require('./propson').default);

program.parse(process.argv);
