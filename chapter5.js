// Chapter 5 MATH EXPRESSIONS Start

// Q1
// Prompt the user to enter the first number
var num1 = parseInt(prompt("Enter the first number:"));
// Prompt the user to enter the second number
var num2 = parseInt(prompt("Enter the second number:"));
// Add the two numbers
var sum = num1 + num2;
// Display the result in the browser
document.write("<h1>Result:</h1>");
document.write(
  "<p>The sum of " + num1 + " and " + num2 + " is " + sum + "</p>"
);

// Q2
// Prompt the user to enter the first number
var num1 = parseInt(prompt("Enter the first number:"));
// Prompt the user to enter the second number
var num2 = parseInt(prompt("Enter the second number:"));
// Perform addition
var sum = num1 + num2;
// Perform subtraction
var difference = num1 - num2;
// Perform multiplication
var product = num1 * num2;
// Perform division
var quotient = num1 / num2;
// Perform modulus
var remainder = num1 % num2;
// Display the results in the browser
document.write("<h1>Results:</h1>");
document.write("<p>Sum: " + sum + "</p>");
document.write("<p>Subtraction: " + difference + "</p>");
document.write("<p>Multiplication: " + product + "</p>");
document.write("<p>Division: " + quotient + "</p>");
document.write("<p>Modulus: " + remainder + "</p>");

// Q3
// a. Declare a variable
var myVariable;
// b. Show the value of variable in your browser
document.write("Value after variable declaration is: " + myVariable + "<br>");
// c. Initialize the variable with some number
myVariable = 5;
// d. Show the value of variable in your browser
document.write("Initial value: " + myVariable + "<br>");
// e. Increment the variable
myVariable++;
// f. Show the value of variable in your browser
document.write("Value after increment is: " + myVariable + "<br>");
// g. Add 7 to the variable
myVariable += 7;
// h. Show the value of variable in your browser
document.write("Value after addition is: " + myVariable + "<br>");
// i. Decrement the variable
myVariable--;
// j. Show the value of variable in your browser
document.write("Value after decrement is: " + myVariable + "<br>");
// k. Show the remainder after dividing the variable's value by 3
var remainder = myVariable % 3;
// l. Output the remainder
document.write("The remainder is: " + remainder);

// Q4
// Store ticket price in a variable
var ticketPrice = 600;
// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;
// Example output
document.write(
  "Total cost of buying 5 tickets to a movie is: " + totalCost + " PKR"
);

// Q5
// Prompt the user to enter a number
var number = parseInt(
  prompt("Enter a number to display its multiplication table:")
);
// Display the multiplication table in the browser
document.write("<h2>Multiplication Table of " + number + ":</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "<br>");
}

// Q6
// Celsius to Fahrenheit conversion function
function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
// Fahrenheit to Celsius conversion function
function fahrenheitToCelsius(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
// a. Store a Celsius temperature into a variable
var celsiusTemperature = 30;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”
var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
document.write(
  celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>"
);
// c. Store a Fahrenheit temperature into a variable
var fahrenheitTemperature2 = 86;
// d. Convert it to Celsius & output “NNoF is NNoC”
var celsiusTemperature2 = fahrenheitToCelsius(fahrenheitTemperature2);
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// Q7
// Variables
var priceItem1 = 650,
  priceItem2 = 100,
  quantityItem1 = 3,
  quantityItem2 = 7,
  shippingCharges = 100;

//  cost
var totalCost =
  priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

document.write("<br>Price of Item 1 is " + priceItem1);
document.write("<br>Price of Item 2 is " + priceItem2);
document.write("<br>Quantity of Item 1 is " + quantityItem1);
document.write("<br>Quantity of Item 2 is " + quantityItem2);
document.write("<br>Shipping Charges is " + shippingCharges);
document.write("<br>Total Cost is " + totalCost);

// Q8
// Store total marks and marks obtained in variables
var totalMarks = 500;
var marksObtained = 420;
// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;
// Display the result in the browser
document.write("<h2>Result:</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

// Q9
// Store the amounts in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;
// Define exchange rates
var exchangeRateUSD = 104.8;
var exchangeRateSAR = 28;
// Convert the total currency to Pakistani Rupees using a single expression
var totalRupees = usDollars * exchangeRateUSD + saudiRiyals * exchangeRateSAR;
// Display the result
document.write(
  "Total amount in Pakistani Rupees: " + totalRupees.toFixed(2) + " PKR"
);

// Q10
// Initialize the variable with some number
var number = 10;
// Perform arithmetic operations in a single expression
var result = ((number + 5) * 10) / 2;
// Display the result
document.write("Result: " + result);

// Q11
var currentYear = 2024;
var birthYear = 2014;
var yourAge = currentYear - birthYear;
document.write("<br><h1>Age Calculator</h1>");
document.write("<br>Current Year:", currentYear);
document.write("<br>Birth Year:", birthYear);
document.write("<br> Your Age:", yourAge);

//Q12
// Store the radius of the circle
const radius = 20;

// Calculate the circumference
const circumference = 2 * Math.PI * radius;
//Outpu1
document.write("<br><h1>The Geometrizer</h1>");
document.write("<br>Radius of a circle:20");
document.write("<br>The circumference is ", circumference);

// Calculate the area
var area = Math.PI * Math.pow(radius, 2);

// Output the results
document.write("<br>The area is ", area);

//Q13
// var fvrt= "chocolate"
// var currentAge=17
// var estimated = 65
// var amount= 3

// Store your favorite snack into a variable
var favoriteSnack = " chocolate ";

// Store your current age into a variable
var currentAge = 17;

// Store a maximum age into a variable
var maxAge = 65;

// Store an estimated amount per day (as a number)
var amountPerDay = 3;

// Calculate how many you would eat total for the rest of your life
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalAmount = daysRemaining * amountPerDay;

// Output the result to the screen
document.write("<br><h1>The Lifetime Supply Calculator</h1> ");
document.write(
  "<br>You will need ",
  totalAmount,
  favoriteSnack,
  " to last you until the ripe old age of ",
  maxAge
);

// Chapter 5 MATH EXPRESSIONS End
