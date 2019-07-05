function solve(arr, criteria) {
    let asc = function(a,b){
        return a - b;
    }

    let desc=function(a,b){
        return b-a;
    }

    if(criteria=='asc'){
        return arr.sort(asc);
    }else if(criteria=='desc'){
        return arr.sort(desc);
    }
}
console.log(solve([1,2,3],'desc'))