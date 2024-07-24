# Guest Verification Center
This is a command-line application built with Node.js that simulates a Guest Verification Center. It allows users to check if they are on the guest list for an event.<br>

# Features
Interactive command-line interface using inquirer<br>
Colorful console output with chalk<br>
Case-insensitive name matching<br>
Option to try again with a different name if not found on the guest list<br>
Pre-defined list of invited guests<br>
# How it works
The program greets the user with a welcome message.<br>
It prompts the user to enter their name.<br>
The entered name is checked against a pre-defined list of invited guests.<br>
If the name is found on the list, the user is welcomed and asked to take their seat.<br>
If the name is not found, the user is informed that they are not invited.<br>
In case of a mismatch, the user is given the option to try again with a different name.<br>
The program continues until a match is found or the user decides to exit.<br>
This application demonstrates the use of user input handling, conditional logic, and string manipulation in TypeScript, as well as the implementation of a simple command-line interface with color-coded output.<br>
