const fs = require('fs');

function decodeValue(value, base) {
    // parseInt supports bases up to 36
    return parseInt(value, base);
}

function lagrangeInterpolatedConstant(points, k) {
    let result = 0;
    for (let i = 0; i < k; i++) {
        let xi = points[i][0];
        let yi = points[i][1];
        let li = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j][0];
                li *= (-xj) / (xi - xj);
            }
        }
        result += yi * li;
    }
    return Math.round(result);
}

function processTestCase(obj) {
    const n = obj['keys']['n'];
    const k = obj['keys']['k'];
    const points = [];
    for (let i = 1; i <= n; i++) {
        let key = String(i);
        if (!(key in obj)) continue; 
        let x = i;
        let base = parseInt(obj[key]['base']);
        let value = obj[key]['value'];
        let y = decodeValue(value, base);
        points.push([x, y]);
    }
   
    return lagrangeInterpolatedConstant(points, k);
}


function readJSONTestCase(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf-8'));
}


try {
    const testcase1 = readJSONTestCase('testcase1.json');
    console.log("Test Case 1 result:", processTestCase(testcase1));
} catch (error) {
    console.error("Error reading testcase1.json:", error.message);
}

try {
    const testcase2 = readJSONTestCase('testcase2.json');
    console.log("Test Case 2 result:", processTestCase(testcase2));
} catch (error) {
    console.error("Error reading testcase2.json:", error.message);
}
