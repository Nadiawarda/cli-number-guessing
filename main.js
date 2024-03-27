#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log("    ============= Welcom to Number Guessing Game ==========");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.bold.yellowBright("Congratulations! You guessed the right number."));
}
else {
    console.log(chalk.bold.redBright("Sorry, You guessed the wrong number."));
}
;
console.log("      ======= Game Over ===========");
