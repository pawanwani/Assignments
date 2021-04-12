function* printPrime(n){
    for (var i = 2; i < n; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

function isPrime(val){
    var flag = 0;
    var m = Math.floor(val/2);
    for(var i=2;i<=m;i++){
        if(val%i == 0){
            flag = 1;
            break;
        }
    }
    if(flag==0){
       return true;
    }else{
       return false;
    }
}

// printPrime(100);
for(let value of printPrime(100)) {
    console.log(value);
}
for(let value of printPrime(1000)) {
    console.log(value);
}

for(let value of printPrime(10)) {
    console.log(value);
}

