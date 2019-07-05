function solve(input) {
    
    input = input
    .sort((a, b) => { return a.length - b.length || a.localeCompare(b) });
   
    for (let word of input) {
        console.log(word);
    }
}
solve(['test',
    'Deny',
    'omen',
    'Default'])