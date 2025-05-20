console.log("Faulty calcuator");
let random = Math.random()
let a = prompt ("Enter first number");
let b = prompt ("Enter second number");
let operator = prompt ("Enter operator");
let obj = {
    "+": "-",
   
    "-": "/",

    "*": "+",


    "/": "**",}
   
if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}