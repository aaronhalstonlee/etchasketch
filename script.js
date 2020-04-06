//global variables
var canvas;
var gridSize = prompt('how big a grid you want, yo?');
//

//grid creation logic
function generateDiv(v){
    canvas = document.getElementById('canvas');
    var canvasSize="1025";
    var cellSize = (canvasSize / (gridSize));

    for(var i=0;i<v;i++){
        var row = document.createElement('div');
        row.className = "row";

        for(var x=0;x<v;x++){
            var cell = document.createElement('div');
            cell.className = "cell";
            cell.id = "box";
            cell.style.height = (cellSize-2)+"px";
            cell.style.width = (cellSize-2)+"px";
            cell.addEventListener("mouseenter", (e) => {
                e.target.className = "red";
            });
            cell.addEventListener("mouseleave", (e) => {
                e.target.className = "draw";
            })
            cell.addEventListener("click", (e) => {
                e.target.className = "cell";
            })
            row.appendChild(cell);
        }
    canvas.appendChild(row);
    }
}
generateDiv(gridSize);
//

//clear button
const btn = document.createElement('button');
btn.innerHTML = "Clear";
btn.id = "button";
document.body.appendChild(btn);
const button = document.getElementById("button")
button.addEventListener("click", (e) => {
  canvas.innerHTML = "";
  gridSize = prompt('how big a grid you want, yo?')
  generateDiv(gridSize);
})
//

