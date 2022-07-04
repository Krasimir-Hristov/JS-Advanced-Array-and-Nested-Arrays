function solve(input) {
let result = [];
let resultPrint = [];

let sorted = input.sort((a, b) => a-b).slice();


for(let i = 0; i < input.length; i++) {
    let min = sorted.shift();
    result.push(min);
    let max = sorted.pop();
    result.push(max)
}
result.filter(x => {
    if(x != undefined) {
        resultPrint.push(x)
    }
});
return resultPrint
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])