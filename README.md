# Color Calculator

In this project we'll create a program that can combine and deconstruct colors according to the following tables

#### Color combining

| inputs | output |
| --- | --- |
| red + blue | purple |
| red + yellow | orange |
| blue + yellow | green |
| anything else | "error" |

#### Color deconstructing

| input | outputs |
| --- | --- |
| purple | red + blue |
| orange | red + yellow |
| green | blue + yellow |
| anything else | error |

We won't worry about any colors that are neither primary nor secondary colors.

## Your program

Fork and clone. Write your code in a file named `main.js`.

Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).

If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.

If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.
