function solve(matrix, commands) {
    
    matrix = matrix.map(x => x.split(' ').map(x => Number(x)));

    for (let tokens of commands) {
        tokens = tokens.split(' ');
      
        if (tokens[0] == 'breeze') {
            let index = Number(tokens[1]);
            let rowToModify = matrix[index];
            for (let index in rowToModify) {
                rowToModify[index] -= 15;
                if (rowToModify[index] < 0) {
                    rowToModify[index] = 0;
                }
            }
        } else if (tokens[0] == 'gale') {
            let index = Number(tokens[1]);
            for (let i = 0; i < matrix.length; i++) {
                for (let y = 0; y < matrix[i].length; y++) {
                    if (y == index) {
                        matrix[i][y] -= 20;
                        if (matrix[i][y] < 0) {
                            matrix[i][y] = 0;
                        }
                    }
                }
            }
        } else if (tokens[0] == 'smog') {
            let value = Number(tokens[1]);
            for (let i = 0; i < matrix.length; i++) {
                for (let y = 0; y < matrix[i].length; y++) {
                    matrix[i][y] += value;
                }
            }
        }
    }
    let polutedAreas = [];
  
    for (let i = 0; i < matrix.length; i++) {
        for (let y = 0; y < matrix[i].length; y++) {
            if (matrix[i][y] >= 50) {
                let block = `[${i}-${y}]`;
                polutedAreas.push(block);
            }
        }
    }
   
    if (polutedAreas.length == 0) {
        console.log(`No polluted areas`);
    } else {
        console.log(`Polluted areas: ${polutedAreas.join(', ')}`);
    }
}
solve([
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24"],
    [
        "smog 11", 
        "gale 3",
        "breeze 1", 
        "smog 2"
    ])

