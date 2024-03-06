var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const A = Number(lines.shift());
const B = Number(lines.shift());
const C = Number(lines.shift());

const result = (B * C).toFixed(2);

console.log("NUMBER = " + A);
console.log(`SALARY = U$ ${result}`);
