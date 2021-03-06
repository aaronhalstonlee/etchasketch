//global variables
var canvas;
var gridSize = prompt('how big a grid you want, yo?');
var randomColor = false;
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
            cell.style.height = (cellSize-1)+"px";
            cell.style.width = (cellSize-1)+"px";
            cell.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "red";
            });
            cell.addEventListener("mouseleave", (e) => {
                if(randomColor){
                    e.target.style.backgroundColor = randColor();
                }
                if(!randomColor){
                    e.target.style.backgroundColor = "black";
                }
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

//random color generator
function randColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//

//clear button
const btn = document.createElement('button');
btn.innerHTML = "Clear";
btn.id = "clear";
document.body.appendChild(btn);

const button = document.getElementById("clear")
button.addEventListener("click", (e) => {
  canvas.innerHTML = "";
  gridSize = prompt('how big a grid you want, yo?')
  generateDiv(gridSize);
  randomColor = false;
})
//

//random color button
const colBtn = document.createElement('button');
colBtn.innerHTML = "Random Color";
colBtn.class = "color";
colBtn.id = "random";
document.body.appendChild(colBtn);

const color = document.getElementById('random');
color.addEventListener("click", () => {
    randomColor ? randomColor = false : randomColor = true;
    console.log(randomColor);
})