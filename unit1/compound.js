/*The compound interest formula is
CI = P(1+(r/n))nt */

var principal = 100000;   // principal amount
var interestRate = 0.10;   //interest rate
var time = 5;   //time
var n = 2;      //number of times interest is compounded per unit 't'
var compoundInterest = principal*((1+(interestRate/n))**(n/time));
console.log(compoundInterest);
