const delay = function (milisec){
    return new Promise ( fullfill => setTimeout(fullfill,milisec));
}

delay(3000).then(()=>{
    console.log("Executed after 3 SECS");
})

