console.log("Hello World!");
const Myname = "Princess Paclibar";
console.log("name: " + Myname);
let age = 21;
let number = "09704945944";
console.log("Age: " + age)
console.log("Number: " + number);

const address = "Brgy 6, Estrella, Victorias City";
console.log("Address: " + address);

//functions
function greet(name) {
    return `good morning, ${name}`;
}
console.log(greet("Rene"));

function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;

    return (`Values: ${num1} and ${num2}. PRODUCT: ${m}, Quotient: ${d}, Sum: ${a}, Difference: ${s}`);
}
console.log(mdas(5, 3));