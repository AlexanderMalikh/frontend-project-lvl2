#!/usr/bin/env node
import makeDiff from '..';

const program = require('commander');

program
  .version('0.1.0')
  .arguments('<firstConfig> <secondConfig> <formatter>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => {
    console.log(makeDiff(firstConfig, secondConfig, program.format));
  });
program.parse(process.argv);
