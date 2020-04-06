var canvas;
function generateDiv(v){
  canvas = document.getElementById('canvas');
  for(var i=0;i<v;i++){
    var row = document.createElement('div');
    row.className = "row";   
    for(var x=0;x<v;x++){
      var cell = document.createElement('div');
      cell.className = "cell";
      cell.id = "box";
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
generateDiv(16);

const btn = document.createElement('button');
btn.innerHTML = "Clear";
btn.id = "button";
document.body.appendChild(btn);

const button = document.getElementById("button")
button.addEventListener("click", (e) => {
  canvas.innerHTML = "";
  generateDiv(16);
})