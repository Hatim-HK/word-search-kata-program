#!/usr/bin/env node
const { program } = require('commander');
const { parseFile } = require('./lib/cli-run');
const solve = require('./lib/solve');

program
  .argument('<file>', 'path to puzzle CSV')
  .action((file) => {
    console.log('Not implemented: load CSV and solve');
  });

program.parse(process.argv);
