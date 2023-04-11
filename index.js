const interface = require('readline-sync'); 

var calculator = require('./calculator'); 

const firstNum= interface.question("Deme el primer numero: ");

const secondNum = interface.question("Deme el segundo numero: "); 

var a=parseInt(firstNum);

var b= parseInt(secondNum); 

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);

console.log(`Minus  ${a} - ${b} = ${calculator.minus(a,b)}`);

console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);

console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);

console.log(`Root  ${a}  = ${calculator.raiz(a)}`);