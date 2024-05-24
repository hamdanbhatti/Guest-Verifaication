#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(
   chalk.black.bgYellow(
      `\n\t\t Welcome to the Guest Verification Center \n`,
   ),
);

let loop = true;
// Guest List
let invitedGuest = [
   "Ali",
   "Mehmood",
   "Tariq",
   "Arshad",
   "Raheem",
   "Omair",
];
while (loop) {
   let userInput = await inquirer.prompt([
      {
         type: "input",
         name: "userName",
         message: "Please Enter your Name",
         validate: (name) => {
            if (name === "") {
               return chalk.redBright("Name is Required");
            }
            return true;
         },
      },
   ]);

   let { userName } = userInput;
   let titleCaseUser = userName.charAt(0).toUpperCase() + userName.slice(1);

   //    Checking Guests
   if (invitedGuest.includes(titleCaseUser)) {
      console.log(
         chalk.yellow(
            `\n\tWelcome ${chalk.greenBright(
               "Mr. " + titleCaseUser + "!",
            )} Please Take your Seat\n`,
         ),
      );
      loop = false;
   } else {
      console.log(
         chalk.red(
            `\n\tSorry ${chalk.yellowBright(
               "Mr. " + titleCaseUser + "!",
            )} You are not invited\n`,
         ),
      );
      let askAgain = await inquirer.prompt([
         {
            type: "confirm",
            name: "otherName",
            message: "Do you Have Another Name?,So Check Again?",
            default: false,
         },
      ]);
      if (!askAgain.otherName) {
         loop = false;
         console.log(
            chalk.redBright(
               "\nWe are Sorry , But you are not in the Guest List.Contact the Organizer Admin\n",
            ),
         );
      }
   }
}
