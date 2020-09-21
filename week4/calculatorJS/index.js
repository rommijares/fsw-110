document.body.style.backgroundColor = 'cornflowerblue'

// Addition

var addButton = document.getElementById('sumButton')

function addition() {
    var add1 = document.getElementById('firstAddNum').value
    var add2 = document.getElementById('secondAddNum').value
    var sum = Number(add1) + Number(add2)
    document.getElementById('sumValue').append(sum)
}
addButton.addEventListener('click', addition)

function clearAddition() {
    document.getElementById('firstAddNum').value = ''
    document.getElementById('secondAddNum').value = ''
    document.getElementById('sumValue').innerHTML = ''
}
document.getElementById('clearAdd').addEventListener('click', clearAddition)


var header1 = document.getElementById('head1')
    header1.style.fontSize = '40px'

var addDiv = document.getElementById('add')
    addDiv.style.textAlign = 'center'
    addDiv.style.border = '5px solid black'
    addDiv.style.margin = '20px 60px 5px 60px'
    addDiv.style.padding = '20px'
    addDiv.style.backgroundColor = 'lightgrey'


//Subtraction

var subButton = document.getElementById('diffButton')

function subtraction() {
    var sub1 = document.getElementById('firstSubNum').value
    var sub2 = document.getElementById('secondSubNum').value
    var diff = Number(sub1) - Number(sub2)
    document.getElementById('diffValue').append(diff)
}
subButton.addEventListener('click', subtraction)

function clearsSubtraction() {
    document.getElementById('firstSubNum').value = ''
    document.getElementById('secondSubNum').value = ''
    document.getElementById('diffValue').innerHTML = ''
}
document.getElementById('clearSub').addEventListener('click', clearsSubtraction)

var header2 = document.getElementById('head2')
    header2.style.fontSize = '40px'

var subtractDiv =document.getElementById('subtract')
    subtractDiv.style.textAlign = 'center'
    subtractDiv.style.border = '5px solid black'
    subtractDiv.style.margin = '20px 60px 5px 60px'
    subtractDiv.style.padding = '20px'
    subtractDiv.style.backgroundColor = 'lightblue'

// Multiplication

var mulButton = document.getElementById('mulButton')

function multiplication() {
    var mul1 = document.getElementById('firstMulNum').value
    var mul2 = document.getElementById('secondMulNum').value
    var product = Number(mul1) * Number(mul2)
    document.getElementById('productValue').append(product)
}
mulButton.addEventListener('click', multiplication)

function clearMultiplication() {
    document.getElementById('firstMulNum').value = ''
    document.getElementById('secondMulNum').value = ''
    document.getElementById('productValue').innerHTML = ''
}
document.getElementById('clearMul').addEventListener('click', clearMultiplication)

var header3 = document.getElementById('head3')
    header3.style.fontSize = '40px'

var multiplyDiv =document.getElementById('multiply')
    multiplyDiv.style.textAlign = 'center'
    multiplyDiv.style.border = '5px solid black'
    multiplyDiv.style.margin = '20px 60px 5px 60px'
    multiplyDiv.style.padding = '20px'
    multiplyDiv.style.backgroundColor = 'lightgreen'