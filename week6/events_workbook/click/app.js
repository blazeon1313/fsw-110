// make the box disapear when the user clicks it

const magicBox = document.querySelector(".red-box");

magicBox.addEventListener("click", function(e){
    e.target.style.display = "none";
})