// javaScript for index HTML

var navBar = document.createElement('nav');
document.body.appendChild(navBar);


var home = document.createElement('a');
home.textContent = 'Home';
home.href = '#home';
document.querySelector('nav').appendChild(home);

var about = document.createElement('a');
about.textContent = 'About';
about.href = ' #about';
document.querySelector('nav').appendChild(about);

var contact = document.createElement('a');
contact.textContent = 'Contact';
contact.href = ' #Contact';
document.querySelector('nav').appendChild(contact);

var newH1 = document.createElement('h1');
newH1.textContent = 'This is my project h1 tag';
document.body.appendChild(newH1);

var newP = document.createElement('p');
newP.textContent = 'This is my project paragraph tag';
document.body.appendChild(newP);

var list = document.createElement('ul');
list.textContent = 'Programing list:';
document.body.appendChild(list);

var listItem1 = document.createElement('li');
listItem1.textContent = 'Research';
document.querySelector('ul').appendChild(listItem1);

var listItem2 = document.createElement('li');
listItem2.textContent = 'Layout'
document.querySelector('ul').appendChild(listItem2);

var listItem3 = document.createElement('li');
listItem3.textContent = 'Writing code';
document.querySelector('ul').appendChild(listItem3);

var listItem4 = document.createElement('li');
listItem4.textContent = 'Debugging Code';
document.querySelector('ul').appendChild(listItem4);

var foot = document.createElement('footer');
foot.textContent = 'This was a fun project challenging but not impossible';
document.body.appendChild(foot);

