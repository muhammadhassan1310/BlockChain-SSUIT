Heading = 'Arithmetic Operators';

console.log('Heading '+Heading);


a = 5;
b = 6;
c = 'test';

result = a + b;
console.log('Addition: '+ result);

result = a - b;
console.log('Subtraction: '+ result);

result = a % b;
console.log('Modulus: '+ result);

a = ++a;
result = ++a;
console.log('Increment: '+ result);

b = --b;
result = --b;
console.log('Decrement: '+ result);

// ------------------------------------------------------------------------------------------


Heading = 'Comparison Operators';

console.log('Heading '+Heading);


a = 5;
b = 6;

result = (a == b);
console.log('Equal: '+ result);

result = (a < b);
console.log('Greater than: '+ result);

result = (a > b);
console.log('Less than: '+ result);

result = (a != b);
console.log('Not Equal: '+ result);

result = (a >= b);
console.log('Greater than or Equal to: '+ result);


// -----------------------------------------------------------------------------------------


Heading = 'Logical Operators';

console.log('Heading '+Heading);


a = 5;
b = 6;

result = (a && b);
console.log('Logical AND: '+ result);

result = (a || b);
console.log('Logical OR: '+ result);

result = (!(a && b));
console.log('Logical NOT: '+ result);

// -----------------------------------------------------------------------------------------


Heading = 'Bitwise Operators';

console.log('Heading '+Heading);


a = 5;
b = 6;

result = (a & b);
console.log('Bitwise AND: '+ result);

result = (a | b);
console.log('Bitwise OR: '+ result);

result = (a ^ b);
console.log('Bitwise ExOR: '+ result);

result = (~b);
console.log('Bitwise Not: '+ result);

result = (a << b);
console.log('Left Shift: '+ result);

result = (a >> b);
console.log('Right Shift: '+ result);

// -----------------------------------------------------------------------------------------


Heading = 'Assignment Operators';

console.log('Heading '+Heading);


a = 5;
b = 6;

result = (a = b);
console.log('Simple Assignment: '+ result);

result = (a += b);
console.log('Add and Assignment: '+ result);

result = (a -= b);
console.log('Substract  and Assignment: '+ result);

result = (a *= b);
console.log('Multiple and Assignment: '+ result);

result = (a /= b);
console.log('Divide and Assignment: '+ result);

result = (a %= b);
console.log('Modules and Assignment: '+ result);