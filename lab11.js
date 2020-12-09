const { throws } = require('assert')
const { exit } = require('process')
const readline = require('readline')
const rl = readline.createInterface({input: process.stdin,output: process.stdout})
class cal{
    constructor(add,sub,mul,div,pow,sqr, cur, exp, expm, log, log10, log2x, sin, cos, tan){
        this.add=add
        this.sub=sub
        this.mul=mul
        this.div=div
        this.pow=pow
        this.exp=exp
        this.log=log
        this.sin=sin
        this.cos=cos
        this.tan=tan
        this.sqr =sqr
        this.cur = cur
        this.expm = expm
        this.log10 = log10
        this.log2x = log2x
    }
}

function Option(){
    rl.question("Please Enter Your Option: \n1. Addition(1):\n2. Substraction(2):\n3. Multiplication(3):\n4. Division(4):\n5. Power(5):\n6. Square Root(6):\n7. Cube Root(7):\n8. Expression(8):\n9. EXPM(9):\n10. LOG(10):\n11. LOGx10(11):\n12. LOG2x(12):\n13. SIN(13):\n14. COS(14):\n15. TAN(15):\n:",
    function(Select){
        if(Select=='1'){
            display.ADD()
        } else if(Select=='2'){ 
            display.SUB()
        } else if(Select=='3'){ 
            display.MUL()
        } else if(Select=='4'){ 
            display.DIV()
        } else if(Select=='5'){ 
            display.POW()
        } else if(Select=='6'){ 
            display.SQR()
        } else if(Select=='7'){ 
            display.CUR()
        } else if(Select=='8'){ 
            display.EXP()
        } else if(Select=='9'){ 
            display.EXPM()
        } else if(Select=='10'){ 
            display.LOG()
        } else if(Select=='11'){ 
            display.LOG10()
        } else if(Select=='12'){ 
            display.LOG2x()
        } else if(Select=='13'){ 
            display.SIN()
        } else if(Select=='14'){ 
            display.COS()
        } else if(Select=='15'){ 
            display.TAN()
        }else{
            console.log("Thank You.! Good Bye")
        }
    })
}
class calculator extends cal{

    constructor(){
        super()
    }

    ADD(){
                this.add = 5+6 ;
                console.log(`Result is : \t`, this.add) 
                exit
    }
    
    
    
    SUB(){
        this.sub = 8 - 6;
        console.log(`Result is : \t`, this.sub) 
        exit
    }
    
    
    
    DIV(){
        this.div = 8 /2;
        console.log(`Result is : \t`,  this.div) 
        exit
    }
    
    
    
    MUL(){
        this.mul =  8 *9;
        console.log(`Result is : \t`, this.mul) 
        exit
    }
    
    POW(){
        this.pow= Math.pow(8, 2) 
        console.log(`Result is : \t`, this.pow) 
        exit
    }
    
    SQR(){
        this.sqr= Math.sqrt(8) 
        console.log(`Result is : \t`, this.pow) 
        exit
    }
    CUR(){
        this.cur= Math.cbrt(9) 
            console.log(`Result is : \t`, this.cur) 
            exit
    }
    EXP(){
        this.exp= Math.exp(9) 
        console.log(`Result is : \t`, this.exp) 
        exit
    }
    EXPM(){
        this.expm= Math.expm1(8) 
            console.log(`Result is : \t`, this.expm)
            exit 
    }
    LOG(){
        this.log= Math.log(7) 
            console.log(`Result is : \t`, this.log)
            exit 
    }
    LOG10(){
        this.log10= Math.log10(5) 
            console.log(`Result is : \t`, this.log10)
            exit 
    }
    LOG2x(){
        this.log2x= Math.log2(6) 
            console.log(`Result is : \t`, this.log2x) 
            exit
    }
    SIN(){
        this.sin= Math.sin(6) 
            console.log(`Result is : \t`, this.sin) 
            exit
    }
    COS(){
        this.cos= Math.cos(6) 
            console.log(`Result is : \t`, this.cos) 
            exit
    }
    
    TAN(){
        this.tan= Math.tan(6) 
            console.log(`Result is : \t`, this.tan) 
            exit
    }
}

var display= new calculator()
Option();