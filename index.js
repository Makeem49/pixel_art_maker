//  Get submit button
let submitButton = document.getElementById('submit');

// Select size inputs/values with explicit 
let inputHeight = document.getElementById('inputHeight');
let inputWidth = document.getElementById('inputWidth');
let isColorCounter = false;

//  Select pixel canvas
let pixelCanvas = document.querySelector('#pixelCanvas');
let modeButton = document.querySelector(".material-icons");

const makeGrid = (event) => {
    event.preventDefault();
    /*
    * @desc create a grid of squares 
        * @param DOM-element $pixelRow - A tr element representing a row of the grid
        * @param int $width - number of squares for row
        * @param int $height - number of squares for column
        * @param DOM-element $pixelCanvas - main box
        * @param str $criteria - Variable storing content
        * @param DOM-element $pixelCell - A td element representing a cell of the grid
    */
   let height = inputHeight.value;
   let width = inputWidth.value;
    if (pixelCanvas.hasChildNodes() && isColorCounter == false){
        submitButton.removeEventListener('click', makeGrid);
    }else if (pixelCanvas.hasChildNodes() && isColorCounter == true){
        pixelCanvas.innerHTML = "";
        isColorCounter = false;
    }else{
        for (var row = 1; row <= height; row++){
            var pixelRow = document.createElement('tr');
            pixelCanvas.appendChild(pixelRow);

            for (var column = 1; column <= width; column++){
                var pixelCell = document.createElement('td'); 
                pixelRow.appendChild(pixelCell);
            }

        }
    }
    

}

const colorGrid=(action)=>{
    /*
        * @desc adds a select color to a cell
        * @param str $colorInput - select color
    */

    var colorInput = document.querySelector('#colorPicker').value;
    if (action.target.nodeName.toLowerCase() === 'td'){
        action.target.setAttribute('style', 'background-color : '+colorInput+'');
        isisColorCounter = true;
    }
    submitButton.addEventListener('click', makeGrid);
}

const mode=() => {
    /*
        * @desc toggle a class
        * @param str $body - target body
    */
    var body = document.body;
    body.classList.toggle("dark-mode");
   
}


submitButton.addEventListener('click', makeGrid);
pixelCanvas.addEventListener('click', colorGrid);
modeButton.addEventListener('click', mode);