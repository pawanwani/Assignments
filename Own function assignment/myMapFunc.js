let arr = [5,6,8,4,1,5,3,65];

let simpleMapfunc = arr.map(val => val **2);
console.log(simpleMapfunc);

//lets create our map function 

function myMapFunc(array,myfun){
    emptyArray = [];
    for(let i=0;i<array.length;i++){
        const result = myfun(array[i],i,array);
        if(result){
            emptyArray.push(result);
        }
    }
    return emptyArray;
}



let ownMapFunc = myMapFunc(arr,val => val **2);
console.log(ownMapFunc);