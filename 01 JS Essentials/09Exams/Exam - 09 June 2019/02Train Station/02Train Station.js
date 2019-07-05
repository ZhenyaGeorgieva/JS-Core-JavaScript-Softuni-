function solve(capacity,passangers){
    let train=[];
    let remainingPass=0;
    
    for (let index = 0; index < passangers.length; index++) {
        let passangersOut=Number(passangers[index]);
       
        if(passangersOut+remainingPass<=Number(capacity)){
            train.splice(index,0,passangersOut+remainingPass);
            remainingPass=0;
        }else{
            remainingPass=passangersOut+remainingPass-capacity;
            train.splice(index,0,capacity);
        }
    }
    
    if(remainingPass<=0){
        console.log(train);
        console.log(`All passengers aboard`);
    }else{
        console.log(train);
        console.log(`Could not fit ${remainingPass} passengers`);
    }
}
solve(6, [5, 15, 2])с