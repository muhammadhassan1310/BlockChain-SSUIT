//Nested Loop

// y = 5;
// x = 5;

// str = "";

// for(i = 1; i < y; i++ ){
//     for(j = 1; j < x; j++){
//         if(i + j >= y){
//             str = str.concat("*");
//         }else{  
//             str = str.concat(" ")
//         }
//     }
//     str = str.concat("\n")
// }
// console.log("pyramit")
// console.log(str)
// -----------------------------------
// y = 5;
// x = 5;

// str4 = "";
// for(i = 1; i < y; i++ ){
//     for(j = 1; j < x; j++){
//         if( j >= i ){
//             str4 = str4.concat("*");
//         }
//     }
//     str4 = str4.concat("\n")
// }
//console.log("Revert pyramit")
// console.log(str4)


// --------------------------------

// y = 10;
// x = 10;
// str5 = "";
// for(i = 1; i < y; i++ ){
//     for(j = 1; j < x; j++){
//         // 1 <= 5 AND 1 >= 5 AND 1 <= 5
//         if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
//             str5 = str5.concat("*");
//         }
//         // 1 >= 5 AND 1 > -4 AND 1 < -6
//         else if(i >= y / 2 && j > ((y / 2) -  i) * (-1) && j < (y - ((y / 2) -  i) * (-1))){
//             str5 = str5.concat("*");
//         }
//         else {
//             str5 = str5.concat(" ");
//         }
//     }
//     str5 = str5.concat("\n");
// }
// console.log("Diamand")
// console.log(str5)



y = 10;
x = 10;
str6 = "";
for(i = 1; i < y; i++ ){
    for(j = 1; j < x; j++){
        // 1 <= 5 AND 1 >= 5 AND 1 <= 5
        if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
            str6 = str6.concat("*");
        }
        // 1 >= 5 AND 1 > -4 AND 1 < -6
        else if(i >= y / 2 && j > ((y / 2) -  i) * (-1) && j < (y - ((y / 2) -  i) * (-1))){
            str6 = str6.concat("*");
        }
        else {
            str6 = str6.concat(" ");
        }
    }
    str6 = str6.concat("\n");
}

console.log(str6)

