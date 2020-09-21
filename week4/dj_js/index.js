
 var newP = document.createElement('p')
    newP.setAttribute('id', 'newP')
    newP.style.border = '5px solid black'
    newP.style.height = '300px'
    newP.style.width = ' 300px'
    document.body.append(newP)

var box = document.getElementById('newP')
    
function hoverOver() {
   box.style.backgroundColor = 'blue'
}
box.addEventListener('mouseenter', hoverOver);

function holdClick() {
   box.style.backgroundColor = 'red'
}
box.addEventListener('mousedown', holdClick)

function releaseClick() {
   box.style.backgroundColor = 'yellow'
}
box.addEventListener('mouseup', releaseClick)

function doubleClick() {
   box.style.backgroundColor = 'green'
}
box.addEventListener('dblclick', doubleClick)

function outOfSquare() {
   box.style.backgroundColor = 'orange'
}
box.addEventListener('mouseout', outOfSquare)



function redKey(e) {
   
   if (e.keyCode == '82') {
      box.style.backgroundColor= 'blue'
      return box.addEventListener('keydown', redKey)
   }
}



/*window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
   if (key.keyCode == '82') {
      alert('hello')
   }
}*/