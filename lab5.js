   var object={
        name:"Muhammad Hassan, Zahid, Ali, Khan",
        city:"Karachi, Lahore, Quetta, Islamabad", 
        country:"Pakistan, Pakistan, Pakistan, Pakistan",
        class: "5,4,8,9"
    }
    var valid;

    for (const property in object) { 
        console.log(`${property}: ${object[property]}`);
    }
    