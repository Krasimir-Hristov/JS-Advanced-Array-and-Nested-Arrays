function solve(input) {
    let result = [];
    let bigest = 0;
 input.filter((x) => {
    
    if(x >= bigest) {
        bigest = x;
        result.push(x)
    }
} )
return result;
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])

    solve([20, 
        3, 
        2, 
        15,
        6, 
        1])