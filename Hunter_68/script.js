console.log("Hello, World!");
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[3].style.backgroundColor = "red";
//document.getElementById.style.backgroundColor = "red";
//document.getElementById("redbox").style.backgroundColor = "blue";
//document.querySelector(".box").style.backgroundColor = "red";
console.log(document.querySelectorAll(".box"));


document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "blue";

});
