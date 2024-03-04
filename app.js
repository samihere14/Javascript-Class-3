// Chapter 9-11

// USER INPUT & CONDITIONAL STATEMENT
// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter your city: ");
if  (city == "Karachi") {
    document.write("Welcome to city of lights")
}
else  if(city == "karachi"){
    document.write("Welcome to  the city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your Gender: ");
if  (gender == "Male" || "male") {
    document.write("Good Morning Sir")
}
else  if(gender == "Female" || "female"){
    document.write("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var color = prompt("Enter the color of the traffic signal: ");

if (color == "Red" || color == "red") {
    document.write("Must Stop");
}
else if (color == "Yellow" || color == "yellow") {
    document.write("Ready to move");
}
else if (color == "Green" || color == "green") {
    document.write("Move Now");
}
else {
   document.write("Invalid color");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”


var fuel = prompt("Enter the remaining fuel in your car (in liters): ");

if (Number(fuel) < 0.25) {
    document.write("Please refill the fuel in your car");
} 
else {
    document.write("Your fuel is sufficient.");
}

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
else if (false) {
alert("False");
}


if("car" < "cat"){
alert("car is smaller than cat");
}

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:


var sub1 = prompt("Enter Marks obtained in subject 1: ");
var sub2 = prompt("Enter Marks obtained in subject 2: ");
var sub3 = prompt("Enter Marks obtained in subject 3: ");

var totalMarks = prompt("Enter the Total Marks: ");

var totalObtained = Number(sub1) + Number(sub2) + Number(sub3);

var percentage = (totalObtained / totalMarks) * 100;

document.write("Percentage obtained: " + percentage + "%<br>");

if (percentage >= 90) {
    grade = 'A';
} 
else if (percentage >= 80) {
   grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} 
else if (percentage >= 60) {
    grade = 'D';
}
else if (percentage  <= 60) {
    grade = 'Fail';
}

document.write("Obtained Marks is: " + grade);


//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = prompt("Guess the secret number (between 1 and 10): ");


if (userGuess == secretNumber) {
   
    document.write("Bingo! Correct answer.");
} 
else if (userGuess == secretNumber - 1) {
    
    document.write("Close enough to the correct answer.");
} 
else {
    
    document.write("Sorry, wrong answer.");
}

// Chapter 10-14

// 1. var city = &quot;Karachi&quot; if (city = &quot;Karachi&quot;) { console.log(&quot;The City OF Lights&quot;) Correct the above statement: Also try this statement by yourself.

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter your city: ");
if  (city == "Karachi") {
    document.write("Welcome to city of lights")
}
else  if(city == "karachi"){
    document.write("Welcome to  the city of lights");
}

//2. This is the first line of an if statement:
if (x === y) {
//Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

if (x === y) {
    var z = prompt("Enter value of z:");
}

//3. Code an if statement that tests if ZipCode is &quot;10010&quot; so, Alert that &quot;Karachi&quot;. if not then alert (&quot;Please write correct city&quot;)

if (ZipCode === "10010") {
    alert("Karachi");
  } else {
    alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;

var someVariable = 10;

if (someVariable === 10) {
    someVariable = 1;
}

// Chapter 11

//1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

if (variable1 != variable2)  {

}

//2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

if (var1 >= var2) {

}

// 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.

var myVariable;
if (myVariable != 5) {
  myVariable = 10;
}
console.log(myVariable);

// 2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and give you grade A/C to Your percentage. (MARKSHEET)

var sub1 = prompt("Enter Marks obtained in subject 1: ");
var sub2 = prompt("Enter Marks obtained in subject 2: ");
var sub3 = prompt("Enter Marks obtained in subject 3: ");

var totalMarks = prompt("Enter the Total Marks: ");

var totalObtained = Number(sub1) + Number(sub2) + Number(sub3);
var percentage = (totalObtained / totalMarks) * 100;

document.write("Percentage obtained: " + percentage + "%<br>");

var grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else {
    grade = 'Fail';
}

document.write("Grade obtained: " + grade);
