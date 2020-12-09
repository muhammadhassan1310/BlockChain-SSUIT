const readline = require('readline')
const ReadLine = readline.createInterface({
input: process.stdin,
output: process.stdout
})

var Balance=1000;

ReadLine.question("Please Enter 4 digit PIN Code: \t", function(pinCode){ 
    if(pinCode=='1234'){
        Option()
}
else{
    console.log("Please Enter Correct PIN Code")
    ReadLine.close()
}
})

function Option(){
    ReadLine.question("Please Enter Your Option (1 or 2): \n1 for cash deposit \n2 for cash withdraw \n:", function(Select){ 
    if(Select=='1'){
        DEPOSIT()
    } else if(Select=='2'){ 
        WITHDRAW()
    }else{
        console.log("Thank You.! Good Bye")
    }
    })
}

function DEPOSIT(){
    ReadLine.question('Enter Deposit Amount : \t', (depositAmount) => { 
    Balance= parseInt(Balance)+parseInt(depositAmount) 
    console.log(`Your Deposited Amount : \t`, depositAmount) 
    console.log(`Your New Balance : \t`, Balance)
    AnOtherOption()
})
}

function WITHDRAW(){
    ReadLine.question('Enter withdraw Amount \t', (withdrawAmount) => { 
    Balance= parseInt(Balance)-parseInt(withdrawAmount) 
    console.log(`Your withdraw Amount : \t`, withdrawAmount) 
    console.log(`Your New Balance : \t`, Balance)
    AnOtherOption()
})
}

function AnOtherOption(){
    ReadLine.question("If You can another Transaction: (1 or 2): \n1 for Yes \n2 for No \n:", function(AnOtherSelect){ 
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