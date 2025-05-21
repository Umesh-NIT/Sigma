let arr = [1, 72, 53, 4, 65, ];

let newArr = arr.map((e, arr , index) => {
    return e ** 2;
})
console.log(newArr);
const greterthanseven = ((e) => {
    if (e > 55) {
        return true;
    }
    return false;
    
})  
console.log(arr.filter(greterthanseven));
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
   
       
//         newArr.push(element**2);
//     }
// console.log(newArr);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const red = (a, b) => {
    return a + b;
}
console.log(arr1.reduce(red));
Array.from("Umesh")
console.log(Array.from("Umesh"));

