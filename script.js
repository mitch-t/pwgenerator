
 let lowerPassword ="abcdefghijklmnopqrstuvwxyz";
 let upperPassword ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let symPassord = "!#$%&'()*+,-./:;<=>?@[]`{|}~";
 let numPassword ="0123456789";
 let include ="";

//generate a random password
function generate(){

     //setting password length and variation
     const variation = document.getElementById("lengthPassword")
     const upper = document.getElementById("uppercaseCheck");
     const lower = document.getElementById("lowercaseCheck");
     const num = document.getElementById("numbersCheck");
     const sym = document.getElementById("symbolsCheck");
    
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
     let password ="";
     let passwordLength = parseInt(variation.value);
    
    //loop to choose password charcters 
    for(var i = 0; i < passwordLength; i++){
        var random = Math.floor(Math.random() * include.length);
        password += include[random];
        
    //Password display
    document.getElementById("display").value = password;
}}
