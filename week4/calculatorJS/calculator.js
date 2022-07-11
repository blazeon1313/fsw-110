// calulator JS page

function dis(val){
    document.getElementById("result").value+=val
}
  
function solve(){
    let a = document.getElementById("result").value
    let b = eval(a)
    document.getElementById("result").value = b
}
  
function clr(){
    document.getElementById("result").value = ""
}