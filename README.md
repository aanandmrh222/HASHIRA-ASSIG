# Key Finder

This project reconstructs a secret value using Lagrange interpolation from a set of key-value pairs, where each value is encoded in a different base. The script reads test cases from JSON files and outputs the reconstructed secret for each test case.

## How It Works
- Each test case is provided as a JSON file (e.g., `testcase1.json`, `testcase2.json`).
- Each test case specifies the number of points (`n`), the threshold (`k`), and a set of key-value pairs, where each value is encoded in a different base.
- The script decodes the values, applies Lagrange interpolation, and prints the reconstructed secret.

## Files
- `keyFinder.js`: Main script to process test cases.
- `testcase1.json`, `testcase2.json`: Example test case files in JSON format.

## Usage

1. **Install Node.js** (if not already installed):
   - Download from https://nodejs.org/

2. **Place your test case JSON files** in the same directory as `keyFinder.js`.

3. **Run the script:**
   ```sh
   node keyFinder.js
   ```
   You will see output like:
   ```
   Test Case 1 result: 3
   Test Case 2 result: 79836264050688
   ```
