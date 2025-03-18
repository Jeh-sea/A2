// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    row_num = grid.rows.length;

    if (row_num == 0) {
        let row = grid.insertRow();
        let cell= row.insertCell();
        cell.onclick = function() {
            this.style.backgroundColor = '${selected_color}';
        };
    }
    else {
        col_num = grid.rows[0].children.length;
        let row = grid.insertRow();
        for (let i =0; i < col_num; i++) {
            let cell = row.insertCell();
            cell.onclick= function() {
                this.style.backgroundColor = '${selected_color}';
            };
        }
    }
}

// Add a column
function addC() {
    row_num = grid.rows.length;

    if (row_num == 0) {
        let row = grid.insertRow();
        let cell = row.insertCell();
        cell.onclick = function() {
            this.style.backgroundColor= '${selected_color}';
        };
    }
    else {
        let rows = grid.rows;
        for(let i=0; i < rows.length; i++){
            let cell = rows[i].insertCell();
            cell.onclick=function() {
                this.style.backgroundColor = '${selected_color}';
            };
        }
    }
}

// Remove a row
function removeR() {
    row_num = grid.rows.length;
    if (row_num != 0) {
        grid.deleteRow(row_num - 1);
    }
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}