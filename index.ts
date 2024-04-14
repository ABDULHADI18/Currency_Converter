#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.greenBright("WELCOME TO CURRENCY CONVERTER"));

const currency : any = {
    USD: 1, //base currency
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.61,
    PKR: 277.30,
    DINAR: 0.31,
    DIRHAM: 3.67,
}

let user_answer = await inquirer.prompt([
    {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR","DINAR","DIRHAM"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD","EUR","GBP","INR","PKR","DINAR","DIRHAM"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);


let fromAmount = currency[user_answer.from] // excange rate
let toAmount = currency[user_answer.to] // excange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount // USD base currency
let convertedAmount = baseAmount * toAmount

console.log(chalk.blue(convertedAmount));

console.log(chalk.red("THANK YOU FOR USING CURRENCY_CONVERTER"));
