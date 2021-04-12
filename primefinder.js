const { EventEmitter } = require('events');


function isPrime(num){
    for(i=2;i<num;i++){
        if(num % i == 0){
            return false
        }
    }
    return true
}


const primefinder = (start,end)=>{
    let event = new EventEmitter();
    let primeNumbers = [];
    let percent = 0;
    const time = setInterval(() => {
        for(let i=start,j=1;i<end;i++,j++){
            if(isPrime(i)){
               primeNumbers.push(i);
               

            }
            let val = Math.floor((j/(end-start))*100);
            percent = val
            event.emit('progress',percent);
            
            if(percent == 100){
                clearInterval(time);
                event.emit("result",primeNumbers)
            }
        }
        

    }, 1000);
    return event;
}
let event = primefinder(10,50)
event.on('progress',values=>console.log(`${values}% work completed`))
event.on('result',(array)=>{
    for (let index = 1; index < array.length; index++) {
        console.log(`${index}:${array[index-1]}`);
    }
})

