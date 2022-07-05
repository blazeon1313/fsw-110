// dj_js script

window.addEventListener('load', handleLoad);

window.addEventListener('mousewheel', wheel);

var square = document.createElement('div');
    square.className = 'square';
    square.style.width = '200px';
    square.style.height = '200px';
    square.style.position = 'absolute';
    square.style.borderStyle = 'solid';
    square.style.borderWidth = '5px';
    square.style.backgroundColor = 'white';
    square.style.borderColor = 'orange';
    square.addEventListener('dblclick', handleButtonClick);
    square.addEventListener('mouseover', handleMouseOver);
    square.addEventListener('mousedown', mouseButtonHandler);
    square.addEventListener('mouseup', mouseUpHandler);
    document.body.appendChild(square);

function handleButtonClick(){
        square.style.backgroundColor = 'red';
    }

function handleMouseOver(){
    square.style.backgroundColor = 'green';
}

function wheel(){
    square.style.backgroundColor = 'purple';
}

function handleLoad(){
    square.style.backgroundColor = 'black';
}

function mouseButtonHandler(){
    square.style.backgroundColor = 'yellow';
}

function mouseUpHandler(){
    square.style.backgroundColor = 'blue';
}

document.addEventListener('keyup', (event) => {
    var name = event.key;
    switch(name){
        case 'r': 
            square.style.backgroundColor = 'red';
            break;
        case 'b': 
            square.style.backgroundColor = 'blue';
            break;
        case 'y': 
            square.style.backgroundColor = 'yellow';
            break;
        case 'g': 
            square.style.backgroundColor = 'green';
            break;
        case 'p': 
            square.style.backgroundColor = 'purple';
            break;
        case 'w': 
            square.style.backgroundColor = 'white';
            break;
    }
});





