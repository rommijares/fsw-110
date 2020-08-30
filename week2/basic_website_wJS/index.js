// NAVIGATION

var navBar = document.createElement ('nav')
    navBar.setAttribute ('id' , 'nav')
    document.body.append (navBar);

var navList = document.createElement ('ul')
    navList.setAttribute ('id' , 'navList')
    navList.style.listStyle = 'none'
    navList.style.display = 'flex'
    navList.style.justifyContent = 'space-around'
    document.getElementById('nav').append (navList);

var home = document.createElement ('li')
    home.setAttribute ('id' , 'home')
    document.getElementById('navList').append (home);

var anchor1 = document.createElement ('a')
    anchor1.textContent = 'HOME'
    anchor1.setAttribute ('id' , 'anchor1')
    anchor1.style.textDecoration = 'none'
    document.getElementById('home').append (anchor1)
    document.getElementById('anchor1').href = '';

var about = document.createElement ('li')
    about.setAttribute ('id' , 'about')
    document.getElementById('navList').append (about);

var anchor2 = document.createElement ('a')
    anchor2.textContent = 'ABOUT'
    anchor2.setAttribute ('id' , 'anchor2')
    anchor2.style.textDecoration = 'none'
    document.getElementById('about').append (anchor2)
    document.getElementById('anchor2').href = '';

var contact = document.createElement ('li')
    contact.setAttribute ('id' , 'contact')
    document.getElementById('navList').append (contact);

var anchor3 = document.createElement ('a')
    anchor3.textContent = 'CONTACT US'
    anchor3.setAttribute ('id' , 'anchor3')
    anchor3.style.textDecoration = 'none'
    document.getElementById('contact').append (anchor3)
    document.getElementById('anchor3').href = '';

// H1

var header = document.createElement ('h1')
    header.textContent = 'This is my header'
    document.body.append (header);

// PARAGRAPH
var para = document.createElement ('p')
    para.textContent = 'This is my paragraph'
    document.body.append (para);

//LIST

var list = document.createElement ('ul')
    list.setAttribute ('id' , 'myList')
    document.body.append (list);

var listOne = document.createElement ('li')
    listOne.textContent = 'Toyota'
    document.getElementById('myList').append (listOne);

var listTwo = document.createElement ('li')
    listTwo.textContent = 'Subaru'
    document.getElementById('myList').append (listTwo);

var listThree = document.createElement ('li')
    listThree.textContent = 'Lexus'
    document.getElementById('myList').append (listThree);

// FOOTER

var footer = document.createElement ('footer')
    footer.textContent = ' Copyright Project 1 2020'
    document.body.append (footer);