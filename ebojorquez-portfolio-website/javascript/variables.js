//use camel casing - remember casing is a MUST with js
//space after my name will create a space between first and last name
//Create a variable that contains your first name.
var myFirstName = "Elizabeth ";
//no space needed - trial and error with spacing sometimes
//create a variable that contains your last name.
var myLastName = "Bojorquez";
//a string can be a sentence but can also me a number
//Create a variable to hold a sentence of your choice.
var string = "This is my first experience using JavaScript."
//this is a variable with a boolean value of true
//Create a variable called theTruth and assign it a boolean value of your choice.
var theTruth = true;
//Create a variable to hold the number 10.
var a = 10;
//Create a variable to hold the number 15.
var b = 15;
//Create a variable to hold the number 25.
var sum = (a + b);

//declaring variables
//Using concatenation, print out the first name and last name with a space in between to the console. 
console.log(myFirstName + myLastName);
//Using the length property method, print out the following sentence to the console using your variable that contains the sentences you created.
console.log(string + " The length of the sentence is " + string.length);
//Quotation marks are literal and variables are added with + signs without quotes
//Print out the following sentence to the console: "The sum of 10 and 15 is equal to 25" (use concatenation and variable names only to create the following sentence. 
console.log("The sum of " + a + " and " + b + " is equal to " + sum)
//the o in typeof is lower case
//Using the typeOf, print out to the console with the following sentence: "The variable theTruth holds the value (true or false based on your variable) and is the type of a (boolean)."
console.log("The variable theTruth holds the value " + theTruth +
	" and is the type of a " + typeof theTruth);