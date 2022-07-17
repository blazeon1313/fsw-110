//js for elementsValue

function submit(){
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    alert("Name: " + name + '\n' + "Number: " + number + '\n' + "Email: " + email);
}

var contact = document.getElementById('contact');
    contact.style.backgroundColor = 'aqua';
    contact.style.borderStyle = 'solid';
    contact.style.borderColor = 'black';
    contact.style.borderWidth = '2px';
    contact.style.height = '200px';
    contact.style.width = '300px';
    contact.style.padding = '10px';
    document.body.appendChild(contact);

var sub = document.getElementById('submit');
    sub.style.margin = '10px';
    sub.style.padding = '5px';
    sub.addEventListener('click', submit);
    document.querySelector('form').appendChild(sub);