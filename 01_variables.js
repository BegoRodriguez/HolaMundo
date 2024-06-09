/* https://skillsforall.com/course/javascript-essentials-1?courseLang=en-US

Question 1: Let's play florist. Declare six variables, 
remembering to name them according to their purpose:

the price of a single rose (8) and the number of roses you have (70)
the price of a single lily (10) and the number of lilies you have (50)
the price of a single tulip (2) and the number of tulips you have (120)
Now declare three variables, one each for the roses, lilies, and tulips 
you have, in which you place their total price. 
Insert the corresponding values into the variables using the variables 
declared in the previous step. Finally, declare a variable in which 
you store the price of all your flowers (again, use the previous 
variables for initialization). Display all inventory information 
in the console in the following form:

Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300 */

let roseUnitPrice = 8
let numberOfRoses = 70

let lilyUnitPrice = 10
let numberOfLilies = 50

let tulipUnitPrice = 2
let numberofTulips = 120

let totalRoses = roseUnitPrice*numberOfRoses
let totalLilies = lilyUnitPrice*numberOfLilies
let totalTulips = tulipUnitPrice*numberofTulips

let total = totalRoses+totalLilies+totalTulips
console.log("Rose - unit price: "+roseUnitPrice+", quantity: "+numberOfRoses+", value: "+totalRoses)
console.log("Lily - unit price: "+lilyUnitPrice+", quantity: "+numberOfLilies+", value: "+totalLilies)
console.log("Tulip - unit price: "+tulipUnitPrice+", quantity: "+numberofTulips+", value: "+totalTulips)
console.log("Total: "+total)