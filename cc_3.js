//Inital Commit
let prices = [7,3,8,5,6]; // Inital Prices
console.log (prices)// Log
prices.push (9);// New price added
console.log (prices);// Log
prices.shift();// Remove 1st price
console.log (prices);// Log

let orders = [1,2,3,4,5];// Order quantity 
console.log (orders);//Log
orders [2] +=5;// Increase order by 5
console.log (orders);//Log

let employee = {
    Name: "Aidan Mcdonell",
    Role: "Technician",
    PreformanceScore: 8,
    isActive: true,
    PromotonEligible: true // New Property Added
} //Employee Information
console.log (employee)//Log
employee.PreformanceScore = 9
console.log("Updated Preformance Score", employee);// Updated Preformace Score
