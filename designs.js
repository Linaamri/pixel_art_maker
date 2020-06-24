// Declaring Variables
let colorPicker = document.getElementById("colorPicker");

const sizePicker = document.getElementById("sizePicker");

const table = document.getElementById("pixelCanvas");

let gridHeight = document.getElementById("inputHeight");

let gridWidth = document.getElementById("inputWidth");


function makeGrid() {
    
    // Draws the table based on the row and cell
    
    for (let x = 0; x < gridHeight.value; x++) {
        let rows = table.insertRow(x);
        for (let y = 0; y < gridWidth.value; y++) {
            let cells = rows.insertCell(y);
            
            // Changes the color of the background when user clicks
            
            cells.addEventListener('click', function(event) {
                
                event.target.style.backgroundColor = colorPicker.value;
                
            })
        }
    }
}
// Creates a grid when clicking submit

sizePicker.addEventListener("submit", function(event) {
    table.innerHTML = "";
    event.preventDefault();
    
    // Makegrid is called when data is submitted
    makeGrid();
});