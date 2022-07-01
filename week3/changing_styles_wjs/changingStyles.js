// JS page for Changing styles

const div = document.createElement('div');
document.body.appendChild(div)

for (let i = 0; i < 5; i++){
    const hey = document.createElement('h2');
    hey.innerHTML = "I did this!!";
    document.querySelector('div').appendChild(hey); 
}


div.classList.add('border')
  



