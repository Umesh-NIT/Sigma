// function nice(name) {
//   console.log("Crazy " + name + " Bros");
//   console.log("Amazing " + name + " Limited");
//   console.log("Fire " + name + " Hub");
// }
// nice("engine")
// nice("Foods")
// nice("Garments")

let obj = {
  1: "crazy",   
  2: "amazing",
  3: "fire",}
let obj1 = {
  1: "engine",
  2: "foods",
  3: "garments",}
let obj2 = {  
  1:"bros", 
  2: "limited",
  3: "Hub",}
  var random = Math.floor(Math.random() * 3) + 1;
  console.log(random);  
  console.log(obj[random], obj1[random], obj2[random]);
  // console.log(obj[1], obj1[1], obj2[1]);