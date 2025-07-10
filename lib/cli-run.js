const fs = require('fs');

/**
 * Parse a CSV puzzle file:
 * - First line: comma-separated word list
 * - Remaining lines: comma-separated characters for each grid row
 * @param {string} filename
 * @returns {{words: string[], grid: string[][]}}
 */
exports.parseFile = function parseFile(filename) {
  const text = fs.readFileSync(filename, 'utf8')
    .trim()
    .split(/\r?\n/);

  // First line: list of words
  const words = text[0].split(',').map(w => w.trim());

  // Remaining lines: grid rows
  const grid = text.slice(1).map(line =>
    line.split(',').map(c => c.trim())
  );

  // Validate square grid
  const N = grid.length;
  for (let row of grid) {
    if (row.length !== N) {
      throw new Error(`Invalid grid: row length ${row.length} != ${N}`);
    }
  }

  return { words, grid };
};