var header = document.createElement ('h1')
    header.textContent = 'Welcome to my JS site'
    document.body.append (header);

var paragraph = document.createElement ('p')
    paragraph.textContent = 'All of this was created with Javascript'
    document.body.append (paragraph);

var orderLi = document.createElement ( 'ol' )
    orderLi.setAttribute ('id', 'list')
    document.body.append (orderLi);

var firstItem = document.createElement ( 'li' )
    firstItem.textContent = 'apples'
    document.getElementById ('list').append (firstItem);

var secondItem = document.createElement ( 'li' )
    secondItem.textContent = 'bananas'
    document.getElementById ('list').append (secondItem);

var thirdItem = document.createElement ( 'li' )
    thirdItem.textContent = 'oranges'
    document.getElementById ('list').append (thirdItem);

var fourthItem = document.createElement ( 'li' )
    fourthItem.textContent = 'grapes'
    document.getElementById ('list').append (fourthItem);
   