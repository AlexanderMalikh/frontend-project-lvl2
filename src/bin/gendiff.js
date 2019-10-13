#!/usr/bin/env node
import diffJson from '../parsers/plain json.js';
const program = require('commander');

program
  .version('0.1.0')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]', 'output format')
  .action(function (firstConfig, secondConfig) {
    diffJson(firstConfig, secondConfig)
  });

program.parse(process.argv);

