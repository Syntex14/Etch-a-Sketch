/*

Part 1

Problem:

How can we create a 16*16 grid of square divs?
    Broaden the focus:
        how do we create a dynmaically generated grid based on solely on javascript?

Limitations: 
    1. create divs using javascript
    2. divs must appear as a grid
    3. divs must be square
    4. 16 by 16, suggesting that ratio of length and width must stay the same for the grid (squares, by default are always the same ratio)
    5. Max width/length of grid is 960px

Operations:
    1. Select a color
    2. Choose grid size
    3. Interact with grid using selected color
    4. Erase color
    5. Choose rainbow color
    6. Interact with grid using selected mode

Part 1a.

How can we create one grid?
*/ 
const pixels = 450;
let userGridInput = +prompt("Please input the number of grids you'd like. No more than 100.");

const div = document.querySelector("#grid");

const dynoDiv = document.createElement('div');
dynoDiv.classList.add('one-grid');

div.appendChild(dynoDiv);

// How can we create two grids?

const div2 = document.querySelector("#grid");

const dynoDiv2 = document.createElement('div');
dynoDiv2.classList.add('one-grid');

div2.appendChild(dynoDiv2);

// How can we create four grids?

const div3 = document.querySelector("#grid");

const dynoDiv3 = document.createElement('div');
dynoDiv3.classList.add('one-grid');

div3.appendChild(dynoDiv3);

// How can we create n number of grids using a constant 450px?

// calculation -- 
// create a constant variable to store 450px
// create a function expression that will calculate pixel dimension
// In the function, using 450px, divide by n. 
// return result 
// ui -- 
// create a constant variable to select grid div
// apply height and weight using result of function expression.
// input -- 
// create a variable to store user input for grids
// using heightWidthOfGridsCalcuation, find the l * w

// missing how to create a dynamical amount of variables

function heightWidthOfGridsCalculation (n) { 
    return pixels/n
};

let result = heightWidthOfGridsCalculation(userGridInput);

const div4 = document.querySelector("#grid");

const dynoDiv4 = document.createElement('div'); // how can I pass result to the width/height?
dynoDiv4.classList.add('one-grid');
dynoDiv4.style.width = result + "px";
console.log(dynoDiv4.style.width = result + "px");
dynoDiv4.style.height = "112.5px"

div4.appendChild(dynoDiv4);


// How do we create a n number of grids using javascript?


// for loop
// create outside variable to select grid, call it motherDiv using an ID
// create outside variable to store loop results, call it htmlGridElements
// for ( i = 1, i <= n, i++)
    // using htmlGridElements, add a div class called grid-boxes and equal it to the variable
// outside of the loop, use innerHTML to the motherDiv. 


