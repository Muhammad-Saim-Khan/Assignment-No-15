// Chapter 6 MATH EXPRESSIONS Start

//Q1
var a = 10;
document.write("<br><h1>Chapter 6-9 </h1>");
document.write("<br>Result");
document.write("<br>The value of a is: ", a);

document.write("<br>The value of ++a is:", ++a);
document.write("<br>Now the value of ++a is: ", a);

document.write("<br>The value of a++ is:", a++);
document.write("<br>Now the value of a++ is:", a);

document.write("<br>The value of --a is:", --a);
document.write("<br>Now the value of a is:", a);

document.write("<br>The value of a-- is:", a--);
document.write("<br>Now the value of a-- is:", a);

//Q2
var a = 2,
  b = 1;
document.write("<br><h1>Q2</h1>");
document.write("<br>The value of a is:", a, "<br>The value of b is:", b);
document.write("<br>Var result:", --a - --b + ++b + b--);

//Q3
var userName = "Enter your name";
var greet = "Good to see you";
var us = prompt(userName);
var gt = alert(greet);

//Q5
var number = +prompt("Enter table number..", "5");

document.write(
  "<br><h1>Table</h1>",
  number +
    "x 1 =" +
    number * 1 +
    "<br>" +
    number +
    "x 2 =" +
    number * 2 +
    "<br>" +
    number +
    "x 3 =" +
    number * 3 +
    "<br>" +
    number +
    "x 4 =" +
    number * 4 +
    "<br>" +
    number +
    "x 5 =" +
    number * 5 +
    "<br>" +
    number +
    "x 6 =" +
    number * 6 +
    "<br>" +
    number +
    "x 7 =" +
    number * 7 +
    "<br>" +
    number +
    "x 8 =" +
    number * 8 +
    "<br>" +
    number +
    "x 9 =" +
    number * 9 +
    "<br>" +
    number +
    "x 10 =" +
    number * 10 +
    "<br>"
);

//Q6
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");
var totalPerSubMarks1 = 100;
var totalPerSubMarks2 = 100;
var totalPerSubMarks3 = 100;
var totalPerSubMarksF =
  totalPerSubMarks1 + totalPerSubMarks2 + totalPerSubMarks3;
var obtainedMarksSub1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarksSub2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarksSub3 = +prompt("Enter obtained marks for " + subject3 + ":");

// Calculate total marks and percentage
var totalMarks1 = obtainedMarksSub1;
var totalMarks2 = obtainedMarksSub2;
var totalMarks3 = obtainedMarksSub3;
var obtainedMarksSub =
  obtainedMarksSub1 + obtainedMarksSub2 + obtainedMarksSub3;
var totalmarksF = obtainedMarksSub1 + obtainedMarksSub2 + obtainedMarksSub3;
var percentage1 = (totalMarks1 / totalPerSubMarks1) * 100;
var percentage2 = (totalMarks2 / totalPerSubMarks2) * 100;
var percentage3 = (totalMarks3 / totalPerSubMarks3) * 100;
var percentageF = (totalmarksF / totalPerSubMarksF) * 100;

var result =
  "<br><h1>Result</h1><br><table><tr><td>Subjects</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>" +
  "<tr><td>" +
  subject1 +
  "</td>" +
  "<td>" +
  totalPerSubMarks1 +
  "</td>" +
  "<td>" +
  obtainedMarksSub1 +
  "</td>" +
  "<td>" +
  percentage1 +
  "%" +
  "</td>" +
  "<tr><td>" +
  subject2 +
  "</td>" +
  "<td>" +
  totalPerSubMarks2 +
  "</td>" +
  "<td>" +
  obtainedMarksSub2 +
  "</td>" +
  "<td>" +
  percentage2 +
  "%" +
  "</td>" +
  "<tr><td>" +
  subject3 +
  "</td>" +
  "<td>" +
  totalPerSubMarks3 +
  "</td>" +
  "<td>" +
  obtainedMarksSub3 +
  "</td>" +
  "<td>" +
  percentage3 +
  "%" +
  "</td>" +
  "<tr><td>" +
  "</td>" +
  "<td>" +
  totalPerSubMarksF +
  "</td>" +
  "<td>" +
  obtainedMarksSub +
  "</td>" +
  "<td>" +
  percentageF +
  "%" +
  "</td>" +
  "</table>";
document.write(result);

// Chapter 6 MATH EXPRESSIONS End
