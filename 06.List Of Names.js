function solve(input) {
let sortedResult = input.sort((a, b) => a.localeCompare(b));
let printNum = 1;
sortedResult.forEach(x => console.log(`${printNum++}.${x}`));
}
solve(["John", "Bob", "Christina", "Ema"]);