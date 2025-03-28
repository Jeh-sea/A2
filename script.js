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
            this.style.backgroundColor = colorSelected;
        };
    }
    else {
        col_num = grid.rows[0].children.length;
        let row = grid.insertRow();
        for (let i =0; i < col_num; i++) {
            let cell = row.insertCell();
            cell.onclick= function() {
                this.style.backgroundColor = colorSelected;
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
            this.style.backgroundColor= colorSelected;
        };
    }
    else {
        let rows = grid.rows;
        for(let i=0; i < rows.length; i++){
            let cell = rows[i].insertCell();
            cell.onclick=function() {
                this.style.backgroundColor = colorSelected;
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
    row_num = grid.rows.length;
    if (row_num != 0) {
        let rows = grid.rows;
        for (let i = 0; i < rows.length; i++) {
            let last_cell = rows[i].children.length - 1;
            rows[i].deleteCell(last_cell);
        }
        col_num = rows[0].children.length;
        if (col_num == 0) {
            row_num = grid.rows.length;
            for (let i = row_num - 1; i >= 0; i--) {
                grid.deleteRow(i);
            }
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.querySelectorAll('td');
    for (let i = 0; i< cells.length; i++) {
        if (cells[i].style.backgroundColor == "") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.querySelectorAll('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
    }
}