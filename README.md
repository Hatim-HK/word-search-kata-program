# Word Search Kata CLI

A Node.js command-line tool to solve word-search puzzles from a CSV file.

## Prerequisites

* Node.js (v14 or later)

## Installation

```bash
# Clone the repo
git clone https://github.com/Hatim-HK/word-search-kata-program.git
cd word-search-kata-program

# Install dependencies
npm install
```

## Usage

Run the word-search solver against a CSV file:

```bash
npm exec word-search -- ./grids/kata.csv
```

Which produces:

```
BONES: (0,6),(0,7),(0,8),(0,9),(0,10)
KHAN:  (5,9),(5,8),(5,7),(5,6)
KIRK:  (4,7),(3,7),(2,7),(1,7)
SCOTTY:(0,5),(1,5),(2,5),(3,5),(4,5),(5,5)
SPOCK: (2,1),(3,2),(4,3),(5,4),(6,5)
SULU:  (3,3),(2,2),(1,1),(0,0)
UHURA: (4,0),(3,1),(2,2),(1,3),(0,4)
```

## Running Tests

Unit tests are managed by Mocha/Chai. To run them:

```bash
npm test
```

Test files reside under the `test/` directory.
