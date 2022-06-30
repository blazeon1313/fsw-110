// js page for Array to Visual assignment


for (let i = 0; i < 10; i++){
    const hey = document.createElement('h1');
    hey.innerHTML = "Hello World!";
    hey.style.color = '#FFFFFF'
    hey.style.backgroundColor = 'purple' 
    hey.style.borderRadius = '10px'
    hey.style.borderStyle = 'solid'
    hey.style.borderWidth = '10px'
    hey.style.borderColor = "#000000"
    document.body.appendChild(hey);
}





var names = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily"
];

var nameList = document.createElement('ul');
nameList.textContent = 'People';
document.body.appendChild(nameList);

for (var i = 0; i < names.length; i++){
    var newName = document.createElement('li');
    newName.textContent = names[i];
    nameList.append(newName);
}