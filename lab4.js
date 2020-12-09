var line = require('readline');
var readline = line.createInterface({ input: process.stdin,
output: process.stdout
});
function name(toString) {
console.log('Name :', toString);
}
function mail(toString) {
console.log('Email :', toString);
}
function address(toString) {
console.log('Home Address :', toString);
}
function cellno(Number) {
console.log('Mobile No :', Number);
}
function qual(toString) { 
console.log('Qualification :', toString);
}
function work(toString) {
console.log('expreience :', toString, "\n");
}
readline.question('Enter Your Name: ', function (a) { 
    readline.question('Enter Your Email Address: ', function (b) {
        readline.question('Enter Your Home Address: ', function (c) { 
            readline.question('Enter Your Mobile Number: ', function (d) {
                readline.question('Enter Your Qualification: ', function (e) { 
                    readline.question('Enter Your Job: ', function (f) {
                        name(a);
                        mail(b); address(c); cellno(d); qual(e);
                        work(f);
                        readline.close();
                          });
                    });
                });
            });
        });
});


// console.log("Enter Name: Muhammad Hassan");
// console.log("Enter Email: muhammadhassan1310@gmail.com");
// console.log("Enter Home Address: Sharifabad, Karachi");
// console.log("Enter Mobile Num: 03323585558");
// console.log("Enter Qualification: MSCS ");
// console.log("Enter Job: Lead Software Developer");