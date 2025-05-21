console.log("That's code for Array and ");
let arr = [1, 12, 32, 34, 65, 67, 87, 88, 79]

arr.push("umesh kumar");
console.log(arr);
arr.unshift("1");

// let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);  
//arr[0] = 346547100;
// console.log(arr, typeof arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);            
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);

// console.log(arr.length);
// let a = "uejm";
// a[0] = "k";
// console.log(a);
// console.log(arr.toString());
// console.log(arr.join(" and "));
//console.log(arr.pop());
// console.log(arr.shift());
console.log(arr.unshift());
// console.log(arr.number(1,5));

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const red = (a ,b) => {
//     return a + b;
// }
// const red1 = (a ,b) => {    
//     return a - b;
// }

let a1 = arr.reduce((a, b) => {
    return a + b;
}, 0);
console.log(a1);
let a2 = arr.reduce((a, b) => {
    return a - b;
    
}, 0);
console.log(a2);

            