function solve(...input){ 

    let counter={};

    for (let a of input ) {
          console.log(`${typeof a}: ${a}`);

          let type=typeof a;
          if(!counter.hasOwnProperty(type)){
              counter[type]=1;
          }else{
              counter[type]+=1;
          }
    }

    let printResult=Object.entries(counter).sort((a,b)=>b[1]-a[1]);
    for (const [key,value] of printResult) {
        console.log(`${key} = ${value}`);
    }
}

solve(2,'v','v')
