// JS for submit events 2

function myFunction() {
    var firstValue = document.getElementById("fname").value;
    var secondValue = document.getElementById("lname").value;
    var ageValue = document.getElementById("age").value;

    var genderValue = document.form1.gender.value;
    console.log(genderValue);

    var selectBox = document.getElementById("friend");

    var hobby = [];
    var checkedBoxes = document.querySelectorAll("input[name=hob]:checked");
    for(var i = 0; i < checkedBoxes.length; i++) {
        hobby.push(checkedBoxes[i].value);
    };

    alert("First name: " + firstValue 
    + "\n Last name: " + secondValue 
    + "\n Age: " + ageValue 
    + "\n Gender: " + genderValue 
    + "\n Likely to bring friend: " + selectBox.options[selectBox.selectedIndex].value 
    + "\n Hobbies: " + hobby);
};


