function solve(input) {

    let result = [];
    for(let num of input) {
        if(num >= 0) {
            result.push(num);
        } else { 
            result.unshift(num);
    }
    }
    return console.log(result.join(`\n`));

}
console.log(solve([7, -2, 8, 9]))
