function solve(input) {


    let result = [];
    for(let curArr of input) {
        let max = Math.max(...curArr);
        result.push(max)
    }
        
    result.sort((a, b) => b - a);

    return result[0]
   
   


}
solve([[20, 50, 10],
    [8, 33, 145]])