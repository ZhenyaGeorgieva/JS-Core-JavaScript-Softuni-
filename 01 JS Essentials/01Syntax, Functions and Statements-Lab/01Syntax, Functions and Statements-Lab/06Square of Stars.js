function solve(a) {
    writeARectangle(a)
    
    function writeARectangle(a = 5) {
        for (let index = 0; index < a; index++) {
            let print = "* ".repeat(a);
            console.log(print);
        }
    }
}
solve(2);