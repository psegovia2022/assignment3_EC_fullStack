// GLOBAL VARIABLES

let futureValue;
let investment;
let rate;
let years;

//COLLECT VALUES FROM THE USER
do {
investment  = parseFloat(prompt('Enter investment amount as xxxx.xx'));
if(isNaN(investment)) {
    alert('You didn\'t enter a number. Please, try again.');
} else {
    break;
}
} while(true);

do {
rate        = parseFloat(prompt('Enter the rate that you are hoping to get on your investment as xx.x'));
if(isNaN(rate) || rate > 6 || rate < 0) {
    alert('Check the number you enter. It should be a number larger than 0 and smaller than 6%');
} else {
    break;}
} while(true);


do {
years       = parseInt(prompt('How many years do you want to invest for?'));
if(isNaN(years) || years < 1 || years > 30) {
    alert('Please, enter a number between 1 and 30');
} else {
    break;
} }
while(true);

//CALCULATE THE FUTURE VALUE

futureValue = investment;
for (let i = 0;  i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//DISPLAY THE RESULTS

document.write(`Investment amount: $${investment.toFixed(2)}<br>`);

document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);

document.write(`Years: ${years}<br>`);

document.write(`Future value: $${futureValue.toFixed(2)}`);
