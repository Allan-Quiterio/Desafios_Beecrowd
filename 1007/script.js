var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const A = Number(lines.shift());
const B = Number(lines.shift());
const C = Number(lines.shift());
const D = Number(lines.shift());

const result = A * B - C * D;

console.log(`DIFERENCA = ${result}`);
