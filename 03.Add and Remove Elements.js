function solve(input) {
    let result = [];
    let counter = 0;
for(let command of input) {
    counter += 1;
    if(command === `add`) {
        
        result.push(counter);
    } else {
        result.pop()
    }

    
}
if (result.length === 0 ) {
    console.log(`Empty`);
} else {
    console.log(result.join(`\n`))
}

}
solve(['remove', 
'remove', 
'remove']);