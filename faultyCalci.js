let a = prompt("enter the value of a");
let b = prompt("enter the value of b");

a = Number(a);
b = Number(b);

console.log("Value of a:", a);
console.log("Value of b:", b);


let opNumber = prompt("enter the operation number\n 1.Additon\n 2.SUbtraction\n 3.Multiplication\n 4.Division\n");
opNumber = Number(opNumber);

console.log("the choosen option is :", opNumber);
// making it faulty , the rules for fauly is to be as follows 
// + --> -
// - --> /
// x --> +
// / --> **

let result;

let c = Math.random();


if(c >0.1) {
    if(opNumber == 1) {
        result = a + b;
    }
    else if (opNumber == 2) {
        result = a - b;
    }
    else if (opNumber == 3) {
        result = a * b;
    }
    else if (opNumber == 4) {
        result = a / b;
    }
    
    else {
        console.log("Invalid operation number. Please enter a number between 1 and 4.");
    }

    if( result != undefined) {
        console.log("result:", result);
    }

}
else {
    if(opNumber == 1) {
        result = a - b;
    }
    else if (opNumber == 2) {
        result = a / b;
    }
    else if (opNumber == 3) {
        result = a + b;
    }
    else if (opNumber == 4) {
        result = a ** b;
    }
    
    else {
        console.log("Invalid operation number. Please enter a number between 1 and 4.");
    }
    
    
    if( result != undefined) {
        console.log("faulty result:", result);
    }
    


}