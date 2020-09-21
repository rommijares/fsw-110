// mouse

 var newP = document.createElement('p')
    newP.setAttribute('id', 'newP')
    newP.style.border = '5px solid black'
    newP.style.height = '400px'
    newP.style.width = '400px'
    newP.style.margin = 'auto'
    document.body.append(newP);

var box = document.getElementById('newP')
    
function hoverOver() {
   box.style.backgroundColor = 'blue'
}
box.addEventListener('mouseenter', hoverOver);

function holdClick() {
   box.style.backgroundColor = 'red'
}
box.addEventListener('mousedown', holdClick);

function releaseClick() {
   box.style.backgroundColor = 'yellow'
}
box.addEventListener('mouseup', releaseClick);

function doubleClick() {
   box.style.backgroundColor = 'green'
}
box.addEventListener('dblclick', doubleClick);

function outOfSquare() {
   box.style.backgroundColor = 'orange'
}
box.addEventListener('mouseout', outOfSquare);

//keyboard

function blueKey(e) {
   if (e.keyCode == '66') {
      box.style.backgroundColor= 'blue'
   }
}
window.addEventListener('keydown', blueKey);

function redKey(e) {
   if (e.keyCode == '82') {
      box.style.backgroundColor= 'red'
   }
}
window.addEventListener('keydown', redKey);

function yellowKey(e) {
   if (e.keyCode == '89') {
      box.style.backgroundColor= 'yellow'
   }
}
window.addEventListener('keydown', yellowKey);

function greenKey(e) {
   if (e.keyCode == '71') {
      box.style.backgroundColor= 'green'
   }
}
window.addEventListener('keydown', greenKey);

function orangeKey(e) {
   if (e.keyCode == '79') {
      box.style.backgroundColor= 'orange'
   }
}
window.addEventListener('keydown', orangeKey);



