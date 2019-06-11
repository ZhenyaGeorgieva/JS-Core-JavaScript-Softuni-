function solve(input) {
    let pattern = /[\w]{1,}/g;
    let matches = input.match(pattern);
    matches = matches.map(x => x.toUpperCase());
    console.log(matches.join(", "))
}
solve('hello')