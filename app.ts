console.log("Hello from Typescript");


function add(n1:number,n2:number)
{
    return n1+ n2;
}


const number1= 5//'5'
const number2 = 2.8

const result= add(number1,number2);
console.log(result)


/////////////TYPES////////
let number5 = 5;
let numberUnknown: number;
let variableAny:any;
let isTrue:boolean;
let stringVal=' Hello How are you?';

// ANY type can be used to store any value
variableAny=stringVal;
console.log('variableAny'+variableAny);

variableAny=number5;
console.log('variableAny '+variableAny);

/////////OBJECT//////////////
let person={
    name:'Ahetesum',
    age:30
};
console.log(person);
console.log(person.nickname) //will give error
