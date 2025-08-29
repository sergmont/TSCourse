"use strict";
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial Investment Amount must be at least zero 0';
    }
    if (duration <= 0) {
        return 'No valid amount of years provided';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least 0';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned, //type of totalInterestEarned, JS omits this when type is same name as variable
            totalContributions
        });
    }
    return annualResults;
}
// ==> expected result = [], an array with all the data, each array for different years
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('-----------------------'); //separator
    }
    // print (output) the result data
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: .08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
