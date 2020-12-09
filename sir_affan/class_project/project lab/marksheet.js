// var marksheet = new map (
//     "physics" , map ("marksobtained" , 90)
// )
// console.log(marksheet);

// var masrksheet = new Multimap([
//     ['physics', 50], 
//     ['b', 1], 
//     ['a', 'two'], 
//     ['b', 2]
// ]);

// var myMarksheet = new Map();
// myMarksheet.set("physics", new Map());

// var myMarksheet= new Map(
//     [
//         ['physics',[['obtainMarks',50],['totalMarks',100]]],
//         ['maths',[['obtainMarks',95],['totalMarks',100]]],
//         ['english',[['obtainMarks',58],['totalMarks',100]]],
//     ]
// );

// for(let m of myMarksheet.entries()){
//     subject = `${m[0]}`;
//     obtainMarks = `${m[1][0][1]}`;
//     totalMarks = `${m[1][1][1]}`;
//     per = obtainMarks * 100 / totalMarks;
//     console.log("Subject: "+ subject + " is Percentage of " + per + "%");
// }

// var MarkSheet = new Map(
//     [
//         "Physics", new Map(
//             ["ObtainMarks", 58],
//             ["TotalMarks", 100]
//         )
//     ]
// )

var MarkSheet = new Map();
var physics = new Map();
var maths = new Map();
var urdu = new Map();
var english = new Map();
MarkSheet.set( "Physics", physics.set("ObtainMarks", 25), physics.set("TotalMarks", 100));
MarkSheet.set( "Maths", maths.set("ObtainMarks", 80), maths.set("TotalMarks", 100));
MarkSheet.set( "Urdu", urdu.set("ObtainMarks", 68), urdu.set("TotalMarks", 100));
MarkSheet.set( "English", english.set("ObtainMarks", 75), english.set("TotalMarks", 100));

var total = 0;
var obtain = 0;
for(let m of MarkSheet.entries()){
    var Per = m[1].get("ObtainMarks") * 100 / m[1].get("TotalMarks");
    obtain = m[1].get("ObtainMarks") + obtain;
    total = m[1].get("TotalMarks") + total;
    console.log("Subject: "+ m[0] + " is Percentage of " + Per + "%");
}
var Percent = obtain * 100 / total

console.log("Total Obtain Marks of " + obtain + "%");
console.log("Total Marks of " + total + "%");
console.log("Overall Percentage of " + Percent.toFixed(2) + "%");

// function valueSetter(){
//     var physics = new Map();
//     MarkSheet.set( "Physics", physics.set("ObtainMarks", 25), physics.set("TotalMarks", 100));
// }

// valueSetter();


// if(MarkSheet.has("Physics")){
//     var Percentage = MarkSheet.get("Physics").get("ObtainMarks") * 100 / MarkSheet.get("Physics").get("TotalMarks")
//     console.log("Physics is percentage of " + Percentage + "%")
// }

// if(MarkSheet.has("Maths")){
//     var Percentage = MarkSheet.get("Maths").get("ObtainMarks") * 100 / MarkSheet.get("Maths").get("TotalMarks")
//     console.log("Maths is percentage of " + Percentage + "%")
// }

// if(MarkSheet.has("Urdu")){
//     var Percentage = MarkSheet.get("Urdu").get("ObtainMarks") * 100 / MarkSheet.get("Urdu").get("TotalMarks")
//     console.log("Urdu is percentage of " + Percentage + "%")
// }

// if(MarkSheet.has("English")){
//     var Percentage = MarkSheet.get("English").get("ObtainMarks") * 100 / MarkSheet.get("English").get("TotalMarks")
//     console.log("English is percentage of " + Percentage + "%")
// }

