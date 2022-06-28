// js file for index html

var newH1 = document.createElement('h1');
newH1.textContent = 'Welcome to my JS site.';
document.body.appendChild(newH1);

var newP = document.createElement('p');
newP.textContent = 'All of this was created usining JavaScript.';
document.body.appendChild(newP);

var list = document.createElement('ol')
document.body.appendChild(list)

var newItem = document.createElement('li')
newItem.textContent = 'Fire'
document.querySelector('ol').appendChild(newItem);

var newItem1 = document.createElement('li')
newItem1.textContent = 'Ice'
document.querySelector('ol').appendChild(newItem1);

var newItem2 = document.createElement('li')
newItem2.textContent = 'Water'
document.querySelector('ol').appendChild(newItem2);



