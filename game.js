let randomNumb =Math.trunc(Math.random() * 20)+1
console.log(randomNumb)

let attempt = 0

let enterbtn = document.getElementById('enterbtn')

enterbtn.addEventListener("click" , function(){
    let userNumb = document.getElementById('userinp').value
 if(userinp == randomNumb){
    document.getElementById("result").innerHTML = `you guess right, The number was ${randomNumb}`

    document.getElementById("result").classList.remove("hide");

    document.getElementById("enterbtn").classList.add("hide");
 }else if(userinp < randomNumb) {
    document.getElementById("result").innerHTML = `too low, try again`

 }
 else if(userinp > randomNumb) {
    document.getElementById("result").innerHTML = `too high,` 
 }

 attempt++;
 document.getElementById("attempt").innerHTML  =   `enter a number to guess`;

 document.getElementById("userinp").value="";

 attempt==0;


 document.getElementById("attempt").innerHTML = `attempts: ${attempt}`;


 document.getElementById("againbtn").classList.add("hide");







})
