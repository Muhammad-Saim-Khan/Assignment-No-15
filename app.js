// ================= THE START =================

//Chapter 6 (Math Expression II) Start

// Q1
var x = 1;
document.write(x++);

// Q2
var x = 100;
document.write("<br>", --x);

// Q3
var x = 50;
var y = x++;
document.write("<br>", y);

// Q4
var y = 50;
var z = --y;
document.write("<br>", z);

// Q5
var num = 5;
var newNum = --num;
document.write("<br>", newNum);

// Q6
var originalValue = 5;
var newValue = ++originalValue;
document.write("<br>", newValue);

// Q7
var al = 16;
var alert1 = ++al;
alert(alert1);

//Chapter 6 (Math Expression II) End

// Chapter 7 (Math Expression III) Start

//Q1
var calculatedNum = 2 + 2 * 6;
document.write("<br><h4>Q1</h4>", calculatedNum);

//Q2
var calculatedNum = (2 + 2) * 6;
document.write("<br><h4>Q2</h4>", calculatedNum);

//Q3
var calculatedNum = (2 + 2) * (4 + 2);
document.write("<br><h4>Q3</h4>", calculatedNum);

//Q4
var calculatedNum = (2 + 2) * 4 + 2;
document.write("<br><h4>Q4</h4>", calculatedNum);
//Q5
var cost = 2 + 2 * 4 + 10;
document.write("<br><h4>Q5</h4>", cost);

//Q6
var units = 2 + 2 * 4 + 10;
document.write("<br><h4>Q6</h4>", units);

// Q7
var pressure = (4 / 2) * 4;
//  the value of pressure will be 8

// Chapter 7 (Math Expression III) End

// Chapter 8 (Concatenating Text Strings) Start

// Q1
var num = "2" + "2";
// the value of num is "22"

// Q2
var message = "Hello," + "Dolly";
// the value of message is "Hello,Dolly"
alert(message);

// Q3
alert("33" + 3);
// message displays in the alert box is 333

// Q4
var firstPart = "Pakistan";
var secondPart = "Zindabad";
alert(firstPart + " " + secondPart);

// Q5
var concatenated = "String" + 123;
// The result will be a string "String123"

// Q6
var firstString = "Hello";
var secondString = "World";
var concatenatedString = firstString + secondString;
console.log(concatenatedString); // Output will be "HelloWorld"

// Chapter 8 (Concatenating Text Strings) End

// Chapter 9 (Prompts) Start

// Q1
var firstName = prompt("Enter first name");

// Q2
var country = prompt("Country?", "China");

// Q3
var yourName = prompt("Enter Your Name");

// Q4
var userInput = prompt("Please enter your favorite color:", "Blue");

// Q5
// Assign strings to two variables
var message = "Enter your favorite food:";
var defaultResponse = "Pizza";
// Prompt using the variables
var userResponse = prompt(message, defaultResponse);

// Q6
// Display a prompt with a message and a default response
var userResponse = prompt("Please enter your favorite color:", "Blue");
// Display the user's response in an alert
alert("Your favorite color is: " + userResponse);

// Chapter 9 (Prompts) End

// ================= THE END =================
