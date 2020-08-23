//Start button prompt

document.getElementById("start").addEventListener("click", function(){

    document.getElementById("prompt")
})
//generate a lowercase password
function getLower(){
 
    
}

//generate a random password
function generate(){

    //setting password length and variation
    let variation = document.getElementById("lengthPassword").value;


    //might need to make an array to hold all the var's or choices?

    //possible password value
    let allSymbols ="123456789!#$%&'()*+,-./:;<=>?@[]`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerPassword ="abcdefghijklmnopqrstuvwxyz";
    //var upperPassword ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //var symPassord = "!#$%&'()*+,-./:;<=>?@[]`{|}~";
    //var numPassword ="123456789";
    let password ="";

    //loop to choose password charcters for allSymbols
    for(var i = 1; i <= variation; i++){
        password = password + allSymbols.(Math.floor(Math.random() * Math.floor(allSymbols.length -1))); 
    }
    //loop to choose password charcters for lowerPassword
    

    //for(var i= 1; i <= lowPassword; i++){
        //password = password + lowerPassword.charAt(Math.floor(Math.random() * Math.floor(lowerPassword.length -1)));     }
    //document.getElementsByClassName("PasswordChoice").value = password;
    //document.getElementById("lengthPassword").value = password;
    //password to display area
    document.getElementById("display").value = password;
}
