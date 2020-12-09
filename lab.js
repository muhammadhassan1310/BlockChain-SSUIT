var line = require('readline');

var lineRead = line.createInterface({ input: process.stdin,
output: process.stdout
});


function Add(number) {
console.log('ADD :: ', number);
}
function Subt(number) {
console.log('Substraction :: ', number);
}
function Mul(number) {
console.log('Multiple :: ', number);
}
function Div(number) {
console.log('Divide :: ', number);
}
function Mod(number) { 
console.log('mod :: ', number);
}


lineRead.question('1st Num : ', function (a) 
{ 
    lineRead.question('2nd Num : ', function (b) 
{
var sum = parseFloat(a) + parseFloat(b); 
var subt = parseFloat(a) - parseFloat(b); 
var mul = parseFloat(alert) * parseFloat(b); 
var div = parseFloat(a) / parseFloat(b); 
var mod = parseFloat(a) % parseFloat(b);

Add(sum) 
Subt(subt) 
Mul(mul) 
Div(div) 
Mod(mod)
lineRead.close();
});
});
