var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const A = Number(lines.shift());
const B = Number(lines.shift());
const C = Number(lines.shift());

const result = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${result.toFixed(1)}`);
