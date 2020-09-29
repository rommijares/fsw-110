const box = document.getElementsByClassName('red-box')[0]

box.addEventListener('mousemove' , function(event) {
    let x = event.clientX
    let y = event.clientY
    box.textContent = 'x position: ' + x + ' y position: ' + y
});
