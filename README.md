# Calculator - Unfinished

## This project allowed me to understand event listeners and DOM manipulation on a deeper level; as well as, Javascript fundamentals

### Bugs

1. Anything divided by 0 = infinity
2. The calculator keeps the last number unless you clear
3. The +/- doesnt work
4. It only takes one operator per calculation
5. When displahy is empty the height collapses

### Approach to fix

1. Add a if statement to the operator function that returns "undefined if the third argument is 0
2. Add a conditional to the number input that clears the previous input if it was not a user input; however, if the user clicks an operator it keeps the previous value. (I could see this clearing every number as it is input so I may need to rework my code so that another array item is only created when the typeof data changes)
3. My current display is displaying an array and the values inside of it are strings so everything inside the display is a string. I'm thinking about possibly indorpirating a .reduce() method that will create an array with both strings (for the operators) and numbers. Maybe I can also create everything in JS so when I get the innerHTML it gives it to me as a number instead of a string.
4. I believe I can rework my Operate function to take a variable number of paramaters. If not possible in JS, loop through the array with operate() inside having an accumilator variable. (.reduce() might work for this)
5. Set height value equal to that of other containers.

[Active Site](https://aldoportillo.github.io/calculator/)

Note: This has been a challenging but fun project and I hope to improve it as my JS knowledge increases.
