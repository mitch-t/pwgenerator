
//possible password value
 // allSymbols ="0123456789!#$%&'()*+,-./:;<=>?@[]`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var lowerPassword ="abcdefghijklmnopqrstuvwxyz";
 var upperPassword ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var symPassord = "!#$%&'()*+,-./:;<=>?@[]`{|}~";
 var numPassword ="0123456789";
 var include ="";

//generate a random password
function generate(){

     //setting password length and variation
     var variation = document.getElementById("lengthPassword")
     var upper = document.getElementById("uppercaseCheck");
     var lower = document.getElementById("lowercaseCheck");
     var num = document.getElementById("numbersCheck");
     var sym = document.getElementById("symbolsCheck");
    
   //conditional statements
     if(upper.checked){
        include += upperPassword;
     }
    if(upper.uncheked){
        include
    }
     if(lower.checked){
        include += lowerPassword;
     }
     if(lower.uncheked){
        include
     }
     if(num.checked){
        include += numPassword;
     }
     if(num.uncheked){
        include
     }
     if(sym.checked){
        include += symPassord;
     }
     if(sym.uncheked){
        include
     }
     var password ="";
     var passwordLength = parseInt(variation.value);
    
    //loop to choose password charcters 
    for(var i = 0; i < passwordLength; i++){
        var random = Math.floor(Math.random() * include.length);
        password += include[random];
        
    //Password display
    document.getElementById("display").value = password;
}}
