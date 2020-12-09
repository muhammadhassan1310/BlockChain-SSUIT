const readline = require('readline')
const ReadLine = readline.createInterface({
input: process.stdin,
output: process.stdout
})

Option();

function Option(){
    ReadLine.question("Please Enter Your Option: \n1. Addition(1):\n2. Substraction(2):\n3. Multiplication(3):\n4. Division(4):\n5. Power(5):\n6. Square Root(6):\n7. Cube Root(7):\n8. Expression(8):\n9. EXPM(9):\n10. LOG(10):\n11. LOGx10(11):\n12. LOG2x(12):\n13. SIN(13):\n14. COS(14):\n15. TAN(15):\n:", function(Select){ 
        if(Select=='1'){
            ADD()
        } else if(Select=='2'){ 
            SUB()
        } else if(Select=='3'){ 
            MUL()
        } else if(Select=='4'){ 
            DIV()
        } else if(Select=='5'){ 
            POW()
        } else if(Select=='6'){ 
            SQR()
        } else if(Select=='7'){ 
            CUR()
        } else if(Select=='8'){ 
            EXP()
        } else if(Select=='9'){ 
            EXPM()
        } else if(Select=='10'){ 
            LOG()
        } else if(Select=='11'){ 
            LOG10()
        } else if(Select=='12'){ 
            LOG2x()
        } else if(Select=='13'){ 
            SIN()
        } else if(Select=='14'){ 
            COS()
        } else if(Select=='15'){ 
            TAN()
        }else{
            console.log("Thank You.! Good Bye")
        }
        })
}



function ADD(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        ReadLine.question('Enter Value 2: \t', (val2) => { 
            result= parseInt(val1)+parseInt(val2) 
            console.log(`Result is : \t`, result) 
            AnOtherOption()
        })
    })
}



function SUB(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        ReadLine.question('Enter Value 2: \t', (val2) => { 
            result= parseInt(val1)+parseInt(val2) 
            console.log(`Result is : \t`, result) 
            AnOtherOption()
        })
    })
}



function DIV(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        ReadLine.question('Enter Value 2: \t', (val2) => { 
            result= parseInt(val1)/parseInt(val2) 
            console.log(`Result is : \t`, result) 
            AnOtherOption()
        })
    })
}



function MUL(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        ReadLine.question('Enter Value 2: \t', (val2) => { 
            result= parseInt(val1)*parseInt(val2) 
            console.log(`Result is : \t`, result) 
            AnOtherOption()
        })
    })
}

function POW(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        ReadLine.question('Enter Power: \t', (val2) => { 
            result= Math.pow(val1,val2) 
            console.log(`Result is : \t`, result) 
            AnOtherOption()
        })
    })
}

function SQR(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.sqrt(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function CUR(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.cbrt(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function EXP(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.exp(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function EXPM(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.expm1(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function LOG(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.log(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function LOG10(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.log10(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function LOG2x(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.log2(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function SIN(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.sin(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function COS(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.cos(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}

function TAN(){
    ReadLine.question('Enter Value 1: \t', (val1) => { 
        result= Math.tan(val1) 
        console.log(`Result is : \t`, result) 
        AnOtherOption()
    })
}
function AnOtherOption(){
    ReadLine.question("If You can another calculation to perform it? : (1 or 2): \n1 for Yes \n2 for No \n:", function(AnOtherSelect){ 
    if(AnOtherSelect=='1'){
        Option()
    } else if(AnOtherSelect=='2'){ 
        console.log("Thank You.! Good Bye")
        ReadLine.close()
    }else{
        console.log("Thank You.! Good Bye")
        ReadLine.close()
    }
    })
}