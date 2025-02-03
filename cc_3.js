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
let feedback = [
    {customerName: "Sam,",feedbackText:"Great Customer Service", Sore: 8 },
    {customerName: "Bob,",feedbackText:"Excelent Product", Sore:9 },
    {customerName: "Hank,",feedbackText:"Product Did not work as intended", Sore:6 },
    ];//Customer feedback
    console.log (feedback);//Log
    feedback.push({customerName: "Susan",feedbackText:"Love it!", Sore:9})
console.log(feedback)//Updated Log
let inventory = {
    itemName: "Flowers",
    stockCount:50,
    price:12.99,
    calculateTotalValue: function(){return this.stockCount*this.price}
};//Inventory
let calculateTotalValue = inventory.calculateTotalValue();
console.log("Total value of inventory for Flowers",inventory.calculateTotalValue);
