const form = document.myForm
function espresso(){
    var sum1= 3*document.getElementById("Esp").value 
    return sum1
}
function iced(){
    var sum2= 4*document.getElementById("ice").value 
    return sum2
}
function cinnamon(){
    var sum3= 5*document.getElementById("cin").value 
    return sum3

}
function sum(){
    var sum4= espresso()+iced()+cinnamon()
    return sum4

}

document.getElementById("button").addEventListener("click", submit)

function submit(eventObject){
    eventObject.preventDefault()
    console.log(eventObject)
    var sum1= 3*document.getElementById("Esp").value 
    var sum2= 4*document.getElementById("ice").value 
    var sum3= 5*document.getElementById("cin").value 
    var sum4= sum1+sum2+sum3
    console.log(sum4)
    document.getElementById("Total").innerText="Total: $"+sum4
}