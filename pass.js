const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let Value1=document.getElementById("value1")
let Value2=document.getElementById("value2")
function Generate(){
    Value1.textContent = " "
    Value2.textContent = " "
    for(let i=0;i<15;i++){
        let rand=Math.floor(Math.random()*characters.length)
        Value1.textContent += characters[rand]
    }
    for(let i=0;i<15;i++){
        let rand=Math.floor(Math.random()*characters.length)
        Value2.textContent += characters[rand]
    }

}
