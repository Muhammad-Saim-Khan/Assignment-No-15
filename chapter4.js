// Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL Start

// Q1
var variable1, variable2, variable3;

// Q2
// Legal Variable Names:

var myVar;
var userName;
var age123;
var _result;
var $totalAmount;

// Illegal Variable Names:

// 1. 123age (Cannot start with a number)
// 2. my-variable (Hyphens are not allowed)
// 3. user name (Spaces are not allowed)
// 4. var (Reserved keyword)
// 5. my variable (Spaces are not allowed)

// Q3
var legal = "$my_1stVariable";
document.write(
  "<h1>Rules for naming JS variables</h1>" +
    "<br> Variable names can only contain number,$ and _ . For example :  " +
    legal
);
var legal1 = "$name, _name or name";
document.write(
  "<br> Variable must be begin with a letter,$ or _ . For example : " +
    legal1 +
    "<br> Variable are case sensitive " +
    "<br> Variable names should not be JS keywords"
);

// Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL End
