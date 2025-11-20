document.write("hii we are still learning </br>" )
// document.write("addition=",x+y,"<br>")
// document.write("subtraction=",x-y,"<br>")
// document.write("multiplication=",x*y,"<br>")
// document.write("division=",x/y,"<br>")
// document.write("DONE")
// console.log("great grand masti");
// var x = 120;
// {
    //     var y = 30;
// }
// console.log(x,y);
// let x =12;
// {
//     let y = 30;
// }
// console.log(x,y);
// let x=10
// let y=5
// document.write(x,"<br>",y,"<br>")
// let sum = x+y;
// document.write(sum,"<br>")
// let diff = x-y;
// document.write(diff,"<br>")
// let prod = x*y;
// document.write(prod,"<br>")
// let quot = x/y;
// document.write(quot,"<br>")
// let rem = x%y;
// document.write(rem,"<br>")
// let isEqual = x==y;
// document.write(isEqual,"<br>")
// let isNotEqual = x!=y;
// document.write(isNotEqual,"<br>")
// let isGreater = x>y;
// document.write(isGreater,"<br>")
// let logicalAnd = x>y && y<10 ;
// document.write(logicalAnd,"<br>")
// let pow= x**y
// document.write(pow,"<br>")

// let fname = "shredder"
// document.write("hello ", fname,"<br>")
// let age = 30;
// document.write("my age =", age,"<br>")
// let isstudent= true;
// document.write(`Student - ${isstudent? "Yes": "No"} <br> ` )
// let mtvalue= null
// document.write(`About   ${mtvalue || "write something"} <br> `)
// let uninitialized;
// document.write(!uninitialized && "write something" )


// let age = prompt("Enter the age")
// if (age >= 18) {
//     document.write("eligible")
// }
// else {
//     document.write("not eligible")
// }


// let num = prompt("enter a num")

// if (num>0){
//     console.log("greater than 0");
    
// }
// else if (num<0) {
//     console.log("less than 0")
// }
// else {
//     console.log("num is 0")
// }


// let fruit = prompt("enter a fruit name")
// switch(fruit) {
// case "apple":
//     console.log("you chose an apple")
// case "banana":
//     console.log("you chose a banana")
// }


// // simple function
// function greeting(){
//     document.write("hello shredder <br>")
// }
// greeting();

// // function expression 
// let date= function(){
//     document.write("have a nice date<br>")
// }
// date();

// // arrow function
// let msg = () => {
//     document.write("April fools<br>")
// }
// msg()

// // iife function
// (function (){
//     document.write("this is iffe function<br>")

// }()); 

// function morning(){
// document.getElementById("demo").innerHTML= "Good morning friends"
// document.getElementById("mode").style.background= "skyblue"
// document.getElementById("mode").style.color= "black"
// }
// function afternoon(){
//     document.getElementById("demo").innerHTML= "Good after amigo's"
//     document.getElementById("mode").style.background= "lightred"
//     document.getElementById("mode").style.color= "yellow"
// }
// function evening(){
//     document.getElementById("demo").innerHTML= "Good evening praaa"
//     document.getElementById("mode").style.background= "blue"
// document.getElementById("mode").style.color= "white"
// }
// function night(){
//     document.getElementById("demo").innerHTML= "Good night mittar"
//     document.getElementById("mode").style.background= "black"
// document.getElementById("mode").style.color= "white"
// }

// function calculate() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("operator").value;
//     let result;

//     if (operator === "add") {
//         result = num1 + num2;
//     } else if (operator === "subtract") {
//         result = num1 - num2;
//     } else if (operator === "multiply") {
//         result = num1 * num2;
//     } else if (operator === "divide") {
//         result = num1 / num2;
//     }

//     // document.getElementById("result").innerText = "Result: " + result;
//     document.getElementById("result").innerHTML = `<h1>Result: ${result}</h1>`
// }


//  function oddeven(num){
//     if (num%2 == 0)
//     {
//         return `${num} is even`
//     } 
//     else {
//         return `${num} is odd`
//         }
//     }
 
//  document.write(oddeven(59))

num=prompt("Enter a num")
console.log(num%2== 0 ? "Even" : "Odd");
