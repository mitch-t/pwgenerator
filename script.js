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
    variation = document.getElementById("lengthPassword").value;


    //might need to make an array to hold all the var's or choices?

    //possible password value
    var allSymbols ="123456789!#$%&'()*+,-./:;<=>?@[]`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //var lowerPassword ="abcdefghijklmnopqrstuvwxyz";
    //var upperPassword ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //var symPassord = "!#$%&'()*+,-./:;<=>?@[]`{|}~";
    //var numPassword ="123456789";
    var password ="";

    //loop to choose password charcters for allSymbols
    for(var i = 0; i < variation; i++){
        password = password + allSymbols.charAt(Math.random() * (allSymbols.length -1)); 
    }
    //loop to choose password charcters for lowerPassword - DOESN"T WORK
    

    //for(var i= 0; i < lowPassword; i++){
        //password = password + lowerPassword.charAt(Math.random() * Math.floor(lowerPassword.length -1));     }
    //document.getElementsByClassName("PasswordChoice").value = password;
    //document.getElementById("lengthPassword").value = password;
    //password to display area
    document.getElementById("display").value = password;
}
