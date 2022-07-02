function solve(arr, n ) {
let result = [];

for(let i = 0; i < arr.length; i+= n) {
    let currN = arr[i]
    result.push(currN)
}
return result
}
solve(['dsa',
'asd', 
'test', 
'tset'], 
2);

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2)
solve(['1', 
'2',
'3', 
'4', 
'5'], 
6)