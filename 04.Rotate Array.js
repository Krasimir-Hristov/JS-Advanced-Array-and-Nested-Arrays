function solve(array, rotations) {

for(let i = 0; i < rotations ; i++) {
    let shiftet = array.pop();
    array.unshift(shiftet)
}
    console.log(array.join(` `))
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)

solve(['1', 
'2', 
'3', 
'4'], 
2)