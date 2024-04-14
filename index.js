import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: "Enter To Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount",
    },
]);
//console.log(answer)
let userFromCurrency = answer.from;
let userToCurrency = answer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//console.log(convertedAmount)
console.log(chalk.red.bold(`Your conversion from ${userFromCurrency} to ${userToCurrency} is ${convertedAmount}`));
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
