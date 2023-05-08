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
 // let userGridInput = +prompt("Please input the number of grids you'd like. No more than 100.");

/* const div = document.querySelector("#grid");

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

*/

// function heightWidthOfGridsCalculation (n) { 
//     let numberOfGrids2 = (n) ** 2
//     return pixels/numberOfGrids2;
// };

function rowGridDimensions (n) {
    let height = pixels/n;
    const rowGridHeight = document.querySelectorAll("#row-divs");
    for (const rowDivHeight of rowGridHeight) {
        rowDivHeight.style.height = height + "px";
    }

}

// let result = heightWidthOfGridsCalculation(userGridInput);

// const div4 = document.querySelector("#grid");

// const dynoDiv4 = document.createElement('div'); // how can I pass result to the width/height?
// dynoDiv4.classList.add('one-grid');
// dynoDiv4.style.width = result + "px";
// console.log(dynoDiv4.style.width = result + "px");
// dynoDiv4.style.height = "112.5px"

// div4.appendChild(dynoDiv4);


// How do we create a n number of grids using javascript?

// function createGridBasedOnUserInput (userGridInput) {

// const gridMain = document.getElementById("grid");
// let htmlGridElements = "";

// for (i = 0; i < userGridInput; i++) {
//     htmlGridElements += '<div class="grid-boxes"></div>';
// }
// gridMain.innerHTML = htmlGridElements;
// }

// createGridBasedOnUserInput();
// gridHeightWidthSizing();

// for loop
// create outside variable to select grid, call it motherDiv using an ID
// create outside variable to store loop results, call it htmlGridElements
// for ( i = 1, i <= n, i++)
    // using htmlGridElements, add a div class called grid-boxes and equal it to the variable
// outside of the loop, use innerHTML to the motherDiv. 

// How can I combined creating n number of grids based on user input with height/WidthOfGridsCalculation?
    // 1. create the grid first
    // 2. then do the calculation and add the height/width of the grid based on user input. 

    function gridDivDimensions(n) {
        let height = pixels/n;
        let width = pixels/n;
        const gridElement = document.querySelectorAll('.grid-divs');
        for (const gridDivDimensionNodes of gridElement) {
            gridDivDimensionNodes.style.width = width + "px";
            gridDivDimensionNodes.style.height = height + "px";
    }
    }

// How can I combined the slider to get the size of the grids generated? 
    // will have to use "input" event, and value in input type="range"
    // how do we properly use html attributes in javascript?

const mySlider = document.querySelector("#myRange");
mySlider.addEventListener("change", e => {
    const removeGrid = document.querySelectorAll("#row-divs"); // will have to create a conditional
    if (removeGrid) {
        for(const rowDivs of removeGrid) {
            rowDivs.remove();
        }
    }

    createGrid(e.target.value);
    rowGridDimensions(e.target.value);
    gridDivDimensions(e.target.value); // sizes the grids using result.

});

// How can properly display the grids as a grid e.g. "Each grid fits perfectly within the grid box"
    // Solution: create row grids
        // each row will have a parent div
            // children div will be added to that parent div based on slider value, so say 5, 5 row divs, with each row div having 5 childnen for a total of 25 grids
        // difficult will be how I added each div to the parent div and stop at the slider value? 
         // 2 * 2 
            // two row divs
                // 4 grid divs
            // think printing the square using astreiks
                // two for loops
                    // one for loop handles the row
                        // second, inner loop handles the grid
        // alogorithm: 

        // where do I put innerHTML for row divs?
        // a bit of redunacy with let numberOfGrids, we just need the slider value, the two for loops can handle the power function in a alogirthm fashion

            // create variable that will store the number of row div, call it numberOfRows, input in mySlider event listener function
            // create variable that grab #grid in HTML, will be used for row divs, const gridRows 
            // create variable that will store row divs, gridRowsStorage
            // create variable that will grab .row-divs const gridDivs 
            // create variable that will store grid divs, gridDivStorage

            // create function, createGrid, that will create the row divs, and the grid divs
            // create for loop, using numberOfRows, starting at zero, less than numberOfRows, and increments one at a time
                // in for loop,  create row divs, .row-divs. 
                    // use #grid.innerHTML equal to gridRowsStorage
                    // create inner secondary for loop, using numberOfRows, starting at zero, less than numberOfRows, and increments one at a time
                        // in for loop, create grid divs, .grid-divs
                            // use gridDivs.innerHTML equal to gridDivStorage (outside of secondary loop)

    // function order
        // 1. myslider event clicker
            // starts: gridSizeCalucation function
            // starts: createGrid function
            // starts: sizeGrid function

        function createGrid(numberOfGridsRows) {
            const gridRows = document.getElementById("grid");

            let gridRowsStorage = "";
            
            
             // may be a slight issue, may hold a continous amount of divs, and not delete after looping x number of times

            for (i = 0; i < numberOfGridsRows; i++) {
                gridRowsStorage += '<div id="row-divs"></div>';
                console.log(`the value of i is: ${i}`);
            }
                gridRows.innerHTML += gridRowsStorage;

            // create variable, parentElementRowDivs, to get parent element
            // create variable, childElements, that use parentElementsRowDivs, to call childNodes
    
            // create for...of loop
                // for const child of childElements 
                    // use for loop below to complete grid
            const parentElementRowDivs = document.getElementById("grid");
            const childElements = parentElementRowDivs.childNodes;
           
                for(i = 0; i < childElements.length; i++) {
                    const childElement = childElements[i];
                    let gridDivStorage = "";
                    for (j = 0; j < numberOfGridsRows; j++) {
                       
                        gridDivStorage += '<div class="grid-divs"></div>';
                            console.log(`j: ${j}`);
                    }

                childElement.innerHTML += gridDivStorage;
                // gridDivs.innerHTML += gridDivStorage;
                gridDivStorage = "";
                }
            
             // grabbing the necessary element and adding the inner html will be done in the outer part of the nest for...of loop
                
                
            
            
        } 


        // innerHTML only works on HTML strings, and will parse the string into nodes and then replaces the children of the parent element
        // gridDiv's isn;t being picked up, getting gridDiv's = null;

// How do I color a grid black when I click down and drag around?
        // event clickers that listen for:
            // mousedown 
            // some type of drag motion - mousemove
            // mouse up
        // change background color of the div that were associated with those event listeners
    // let's start with using click as an example
        // when I click a div, I need to give it a background color of black
            // create variable, clickGridForColor, to grab grid-divs
            // use clickGridForColor to add event listener to listen for "click"
            // use event.target.style.backgroundColor to pass black color into grid
    // const blackReferenceButton = document.getElementById("black")
    // blackReferenceButton.addEventListener("click", colorGridBlack);
    //     function colorGridBlack () {
    //     const clickGridForColor = document.getElementById("grid");
    //             clickGridForColor.addEventListener("click", e => {
    //                 e.target.style.backgroundColor = "black";
    //               //  e.stopImmediatePropagation();
                    
    //             });
    //         };

    // const eraserReferenceButton = document.getElementById("eraser");
    // eraserReferenceButton.addEventListener("click", eraseGrid);
    
        // function eraseGrid() {
        // // const clickGridEraser = document.getElementById("grid");
        // //         clickGridEraser.addEventListener("click", e => {
        // //             e.target.style.backgroundColor = "white";
        // //             e.stopImmediatePropagation();
        // //         });
        // // }
            

        // const clearGrid = document.getElementById("grid");
        // const clearReferenceButton = document.getElementById("clear-btn");
        //     clearReferenceButton.addEventListener("click", () => {
        //         clearGrid.addEventListener("click", e => {
        //             console.log(e.currentTarget);
        //         });
        //     });
        
        const getButtonClick = document.getElementById("nav-button");
        getButtonClick.addEventListener("click", e => {
            let backGroundColorSelector = ""
            
    
            buttonSelection = e.target.id;
            if (buttonSelection === "black-btn") {
                backGroundColorSelector = "black";
                
            }
            else if (buttonSelection === "white-btn") {
                backGroundColorSelector = "white";
                
            }
            else if (buttonSelection === "random-btn") {
                rainbowColorClicker();
                
            }
            // clear button
                // getElementsByClass --> HTMLCollection   
                    // use length to create a for loop
                        // for each element, set backGround to white
            else if (buttonSelection === "clear-btn") {
                clearGridButton();
            }
            const clickGridColorEraser = document.getElementById("grid");
            clickGridColorEraser.addEventListener("click", e => {
                    // will have to create a conditional that checks if buttonSelection was rainbow, if so, will have to call function randomize color and then apply color to the target
                    e.target.style.backgroundColor = `${backGroundColorSelector}`;
                    // setGridDivAttributes(e, `${backGroundColorSelector}`);
                    e.target.setAttribute("id", "color");
                    // instead of a string, have a template literal (`${backGroundColorSelector})
                     // wouldn't need the switch anymore, but still would need nav.button event click to get backGroundColorSelector
            
            
                
                    
                    
            
          
            });
        });

        function clearGridButton () {
            const getElementsWithColor = document.querySelectorAll("#color");
                for(i = 0; i < getElementsWithColor.length; i++) {
                    getElementsWithColor[i].style.backgroundColor = "white";
                }

        }

        function colorRandomizer () {
            // rgb (red, green, blue) with each respective element ranging from 0 to 255. 
          // will create three randomizers that will get a value between 0 and 255
            // return results back to function clickers and add styling

            let red = Math.floor(Math.random() * 255)
            let green = Math.floor(Math.random() * 255)
            let blue = Math.floor(Math.random() * 255)
                return [red, green, blue];
        }
            
        function rainbowColorClicker () {
            const rainbowColorSelector = document.getElementById("grid");
            rainbowColorSelector.addEventListener("click", function(e) {
                let [red, green, blue] = colorRandomizer();
                    e.target.style.backGroundColor = `rgb(${red} ${green} ${blue})`;

            });
        }
                    
            
    
        
        
            
        // How can I get the event listeners to only fire when their button is clicked? Or not stop another event listener from firing?
            // create an event listener for the nav that listens to click
                // will track the e.target.value which corresponds with the button
                    // use a switch case that allows the correct event listener to fire and only fire e.g. eraseGrid..
        
    
    
    



