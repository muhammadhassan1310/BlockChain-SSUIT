function myData(a, b) { 
    return a+b; 
 } 
 console.log(myData(5, 5)); // 123 
 process.stdout.write(`${myData(5, 5)}`)
 function multi(a, b) { 
    return console.log(a+b);
 }  
 multi(8,6);

dress = 'shirt';
function dressCode(){
    dress = "Ladies dress";
    return dress;
}
console.log(dress);
console.log(dressCode());

//override variable
console.log(dressCode());
console.log(dress);

xArray = [[5,9,6], ['php', 'laravel', 'codeignitor']]
xArray[0] = [9,8,5];
xArray.push(['c++', 'c', 'c#']);
xArray.pop();
xArray.unshift(['c++', 'c', 'c#']);
xArray.shift();
xArray.splice(1, 2, "asp", 'nodejs');
xArray.slice(0, 1);
console.log(xArray);











// a = 5
// b = 6

// result
// a = 6
// b = 5



// 5 + 6 = 11
// 11 - 5 = 6
// 11 - 6 = 5


// a = a + b
// a = 11 = 5 + 6

// a = a - b
// b = 5 = 11 - 6

// a =  a - b
//a = 6  = 11 - 5