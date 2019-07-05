function solve(input){

    let delimeter=input[input.length-1];
    input.pop();
    console.log(input.join(delimeter));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])