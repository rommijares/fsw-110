for ( i=0; i<5; i++) {
    var list = document.createElement('h2')
    list.textContent = 'JavaScript Practice'
    list.style.fontSize = '20px'
    list.style.fontWeight = 'lighter'
    list.style.fontFamily = 'sans-serif'
    list.style.color = 'cornflowerblue'
    document.body.append(list)
};

document.body.classList.add('border');

