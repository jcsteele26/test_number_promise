function testNum(number) {
    test = new Promise(function(resolve,reject){
       
        if (number <= 50) {
            resolve(number + " is less than 50")
         } else {
             reject(number + " is greater than 50")
         };

    return test;
    });

}

testNum(35);
console.log(test);

testNum(70);
console.log(test);
   