// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var popUp = document.getElementById("submit-me")
popUp.name.id="FirstName";
popUp.age.id = "Date";
popUp.addEventListener("submit", function(e){
    e.preventDefault()
    alert("Name: " + popUp.FirstName.value + '\n' + "Age: " + popUp.Date.value)
})