

document.getElementById("start").addEventListener("click", function(){

    document.getElementById("prompt")
})
//generate a random password
function generate(){

    //setting password length and variation
    var variation = document.getElementById("lengthPassword").value;

    //might need to change the "slider" into the user input for length.

    //might need to make an array to hold all the var's or choices

    //possible password value
    var allSymbols ="123456789!#$%&'()*+,-./:;<=>?@[]`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerPassword ="abcdefghijklmnopqrstuvwxyz";
    var upperPassword ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var symPassord = "!#$%&'()*+,-./:;<=>?@[]`{|}~";
    var numPassword ="123456789";
    var password ="";

    //loop to choose password charcters for allSymbols
    for(var i = 1; i <= variation; i++){
        password = password + allSymbols.charAt(Math.floor(Math.random() * Math.floor(allSymbols.length -1))); 
    }
    //loop to choose password charcters for lowerPassword
    
    
    document.getElementById("lengthPassword").value = password;
    //password to display area
    document.getElementById("display").value = password;
}
