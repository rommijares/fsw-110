var first = document.getElementById('firstName')
var mid = document.getElementById('midName')
var last = document.getElementById('lastName')

function nameTogether() {
    var x = first.value + ' ' + mid.value + ' ' + last.value
    alert(x)
    }
document.getElementById('submit').addEventListener('click', nameTogether)

function clear() {
    first.value = ''
    mid.value = ''
    last.value = ''
}
document.getElementById('submit').addEventListener('click', clear)

var myForm = document.getElementById('myForm')
    myForm.style.textAlign = 'center'

first.style.marginBottom = '10px'
first.style.textAlign = 'center'
first.style.fontSize = '20px'

mid.style.marginBottom = '10px'
mid.style.textAlign = 'center'
mid.style.fontSize = '20px'

last.style.marginBottom = '10px'
last.style.textAlign = 'center'
last.style.fontSize = '20px'

document.getElementById('submit').style.fontSize = '20px'