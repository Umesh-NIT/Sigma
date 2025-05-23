console.log("Using DOM consept solving problem");

// let box = document.querySelector(".box");
// let rendomcolor = document.querySelector(".rendomcolor");
// let color = document.querySelector(".color").computedStyleMap.color = "rendomcolor";
// let color1 = document.querySelector(".color1");

//document.body.style.backgroundColor = "rendom";
//console.log(document.body.style.backgroundColor);
// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function setRandomColors(containerClass) {
//   const containers = document.querySelectorAll(containerClass);
//   containers.forEach(container => {
//     container.style.backgroundColor = getRandomColor();
//   });
// }

// // Example usage:
// setRandomColors('.container'); // Apply to elements with class "container"
// function getRandomColor() {
//     const l = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += l[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     box.style.backgroundColor = getRandomColor();
// });
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const boxes = document.querySelectorAll('.box');    
// boxes.forEach(box => {
//     box.style.backgroundColor = getRandomColor();
// });
// console.log(getRandomColor());
//  function getRandomColor() {
//      const letters = '0123456789ABCDEF';
//      let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];     }
//   return color;
// } 
// // const boxes = document.querySelectorAll('.box');    
// // boxes.forEach(box => {
// //     box.style.backgroundColor = getRandomColor();
// // });
// document.querySelector(".rendomcolor").addEventListener("click", function () {
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach(box => {
//         box.style.backgroundColor = getRandomColor();
//     });
// });
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// document.querySelector(".rendomcolor").addEventListener("click", function () {
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach(box => {
//         box.style.backgroundColor = getRandomColor();
//     });
// });
function getOctaColor() {
    // Generate RGB using octal (0-7), scaled to 0-255
    const r = Math.floor(Math.random() * 8) * 32; // 0–224
    const g = Math.floor(Math.random() * 8) * 32;
    const b = Math.floor(Math.random() * 8) * 32;

    return `rgb(${r}, ${g}, ${b})`;
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.style.backgroundColor = getOctaColor();
});


