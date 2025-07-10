const { expect } = require('chai');
const solve = require('../lib/solve');
const { parseFile } = require('../lib/cli-run');
const fs = require('fs');
const path = require('path');

describe('Word Search Solver', () => {
  describe('solve()', () => {
    it('finds a horizontal word left-to-right', () => {
      const grid = [
        ['B','E','E'],
        ['X','X','X'],
        ['X','X','X'],
      ];
      const result = solve(['BEE'], grid);
      expect(result.BEE).to.deep.equal([[0,0],[1,0],[2,0]]);
    });

    it('finds a horizontal word right-to-left', () => {
      const grid = [
        ['X','X','X'],
        ['T','A','E'],
        ['X','X','X'],
      ];
      const result = solve(['EAT'], grid);
      expect(result.EAT).to.deep.equal([[2,1],[1,1],[0,1]]);
    });

    it('finds a vertical word top-to-bottom', () => {
      const grid = [
        ['C','X','X'],
        ['A','X','X'],
        ['T','X','X'],
      ];
      const result = solve(['CAT'], grid);
      expect(result.CAT).to.deep.equal([[0,0],[0,1],[0,2]]);
    });

    it('finds a vertical word bottom-to-top', () => {
      const grid = [
        ['X','X','X'],
        ['T','X','X'],
        ['A','X','X'],
        ['C','X','X'],
      ];
      const result = solve(['CAT'], grid);
      // C at (0,3), A at (0,2), T at (0,1)
      expect(result.CAT).to.deep.equal([[0,3],[0,2],[0,1]]);
    });

    it('finds a diagonal descending word', () => {
      const grid = [
        ['C','X','X','X'],
        ['X','A','X','X'],
        ['X','X','T','X'],
        ['X','X','X','X'],
      ];
      const result = solve(['CAT'], grid);
      expect(result.CAT).to.deep.equal([[0,0],[1,1],[2,2]]);
    });

    it('finds a diagonal ascending word', () => {
      const grid = [
        ['X','X','T','X'],
        ['X','A','X','X'],
        ['C','X','X','X'],
        ['X','X','X','X'],
      ];
      const result = solve(['CAT'], grid);
      expect(result.CAT).to.deep.equal([[0,2],[1,1],[2,0]]);
    });

    it('finds a diagonal descending backwards word', () => {
      const grid = [
        ['X','X','C','X'],
        ['X','A','X','X'],
        ['T','X','X','X'],
      ];
      const result = solve(['CAT'], grid);
      expect(result.CAT).to.deep.equal([[2,0],[1,1],[0,2]]);
    });

    it('finds a diagonal ascending backwards word', () => {
      const grid = [
        ['T','X','X'],
        ['X','A','X'],
        ['X','X','C'],
      ];
      const result = solve(['CAT'], grid);
      // C at (2,2), A at (1,1), T at (0,0)
      expect(result.CAT).to.deep.equal([[2,2],[1,1],[0,0]]);
    });
  });

  describe('parseFile()', () => {
    const sample = [
      'BEE,ACE,FOO',
      'B,E,E',
      'A,C,E',
      'F,O,O'
    ].join('\n');

    const tmpFile = path.join(__dirname, 'tmp-puzzle.csv');

    before(() => fs.writeFileSync(tmpFile, sample));
    after(() => fs.unlinkSync(tmpFile));

    it('parses words list and grid from CSV', () => {
      const { words, grid } = parseFile(tmpFile);
      expect(words).to.deep.equal(['BEE','ACE','FOO']);
      expect(grid).to.deep.equal([
        ['B','E','E'],
        ['A','C','E'],
        ['F','O','O']
      ]);
    });
  });
});
