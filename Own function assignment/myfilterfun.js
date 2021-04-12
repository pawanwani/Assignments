function filter(arr, filterFunc) {
    let filterArr = [];  
    for(let i=0;i<arr.length;i++){  
        let result = filterFunc(arr[i], i, arr);                
        if(result){
            filterArr.push(arr[i]);     
        }
    }
  
    return filterArr; 
}

 
let arr=[5,2,6,8,10,1];

let oddArr2 = filter(arr, num => num % 2 === 0);
console.log(oddArr2);

//normal filter function
let normalFilter = arr.filter(num => num%2 !=0);
console.log(normalFilter);