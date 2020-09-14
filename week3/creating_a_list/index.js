// Criteria 2
var header = document.createElement('h1')
        header.textContent = 'Hello World'
        document.body.append (header);

// Criteria 3 and 4
for (var i=0; i < 10; i++) {
    var header = document.createElement('h1')
        header.textContent = 'Hello World'
        header.style.color = "blue"
        header.style.textAlign = "center"
        document.body.append (header);
}

// Criteria 5
var names = [
    'steve', 
    'larry', 
    'joe', 
    'shirley', 
    'steph', 
    'nate', 
    'rick', 
    'emily'
]

//Criteria 6
for (var i=0; i < names.length; i++) {
    var newP = document.createElement('p')
    newP.textContent = names[i]
    document.body.append(newP);
}