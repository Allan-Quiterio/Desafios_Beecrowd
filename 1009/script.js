var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const A = lines.shift();
const B = Number(lines.shift());
const C = Number(lines.shift());

const result = B + C * 0.15;

console.log("TOTAL = R$ " + result.toFixed(2));
