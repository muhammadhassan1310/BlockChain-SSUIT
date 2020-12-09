var myMap = new Map();
myMap.set("r","Red");
myMap.set("b","Blue");
myMap.set("bl","Black");

console.log(myMap.size);

var map = new Map();
map.set('name','Blockchain');

map.get('name');

var map2 = new Map();
map2.set(1,true);
console.log(map2.has("1"));
map2.set("1",true);
console.log(map2.has("1"));

var roles = new Map();
roles.set('r1','User').set('r2','Guest').set('r3','Admin');
console.log(roles.has('r1'))

var roles1= new Map([['r1','User'],['r2','Guest'],['r3','Admin'],]);
console.log(roles1.get('r2'))