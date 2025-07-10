/**
 * Directions to search: 8 directions
 */
const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

/** Check if (x,y) is within bounds [0,N)
 * @param {number} x
 * @param {number} y
 * @param {number} N
 * @returns {boolean}
 */
function inBounds(x, y, N) {
  return x >= 0 && y >= 0 && x < N && y < N;
}

/**
 * Solve a word search puzzle.
 * @param {string[]} words - list of words to find
 * @param {string[][]} grid - NxN character grid
 * @returns {{ [word: string]: [number, number][] }} mapping each word to its coordinates
 */
module.exports = function solve(words, grid) {
  const N = grid.length;
  const result = {};

  for (let word of words) {
    const L = word.length;
    outer:
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (grid[y][x] !== word[0]) continue;

        // try all directions
        for (let [dx, dy] of DIRS) {
          let cx = x;
          let cy = y;
          const coords = [[cx, cy]];

          for (let i = 1; i < L; i++) {
            cx += dx;
            cy += dy;
            if (!inBounds(cx, cy, N) || grid[cy][cx] !== word[i]) {
              coords.length = 0;
              break;
            }
            coords.push([cx, cy]);
          }

          if (coords.length === L) {
            result[word] = coords;
            break outer;
          }
        }
      }
    }

    // All words guaranteed present by spec, but safety:
    if (!result[word]) {
      throw new Error(`Word not found: ${word}`);
    }
  }

  return result;
};
