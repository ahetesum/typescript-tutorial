console.log("Hello from Typescript");
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5; //'5'
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
/////////////TYPES////////
var number5 = 5;
var numberUnknown;
var variableAny;
var isTrue;
var stringVal = ' Hello How are you?';
// ANY type can be used to store any value
variableAny = stringVal;
console.log('variableAny' + variableAny);
variableAny = number5;
console.log('variableAny ' + variableAny);
