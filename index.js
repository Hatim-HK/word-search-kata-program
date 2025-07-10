#!/usr/bin/env node
const { program } = require('commander');
const { parseFile } = require('./lib/cli-run');
const solve = require('./lib/solve');

program
  .argument('<file>', 'path to puzzle CSV')
  .action((file) => {
    try {
      // parse the CSV into words & grid
      const { words, grid } = parseFile(file);
      // solve the puzzle
      const results = solve(words, grid);
      // print each word and its coordinates
      for (const w of words) {
        const coords = results[w]
          .map(([x, y]) => `(${x},${y})`)
          .join(',');
        console.log(`${w}: ${coords}`);
      }
    } catch (err) {
      console.error('Error:', err.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
