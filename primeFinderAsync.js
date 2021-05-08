/* create an asynchronous Prime Finder that should return 
a list of primes between a given Range
the function should be asynchronous

findPrimes(2,100); should finish Second
findPrimes(2,10000); should finish last
findPrimes(2,10); should finish first
 */

function isprime(val){
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

function findPrime(start,end){
    let primeNumbers=[];
    let minValue = start;

    let maxValue = Math.min(minValue+1000,end);
    return new Promise((fullfill)=>{
        let timer = setInterval(() => {
            for (let i=start ; i < maxValue; i++) {
                if(isprime(i)){
                    primeNumbers.push(i);
                }
            }
            minValue = maxValue;
            maxValue = Math.min(minValue+100,end)
            if(minValue >= end){
                clearInterval(timer);
                fullfill(primeNumbers);
            }
            
        }, 1);
        
    });
    
    
}

async function  findPrimeAsync(min, max){
    try{
     let result = await findPrime(min,max);

     console.log(`
        Prime Numbers between ${min},${max} => ${result}     `);
    }catch(error){
        console.log("error",error);
    }
 }
 findPrimeAsync(100,10000)
 findPrimeAsync(2,100);