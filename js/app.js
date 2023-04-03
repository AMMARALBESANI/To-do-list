'use strict';




let n = prompt("please enter your name")
if (n == ""){
    prompt("please add yor name ")

}else{
    let age = prompt("please"+" "+n+" "+"enter your age")
    if (age <=0){
        alert("please enter valid age")
    }else {
        let g = prompt("please"+" " +n+" "+"enter your gender")
         if(g==="male"){
           let mc = confirm("do you want to skip welcome")
           if(mc === false){
            alert("welcome Mr"+" "+n)
           }
         }else if (g==="female"){
            let fc = confirm("do you want to skip welcome")
            if(fc === false){
             alert("welcome Ms"+" "+n)
            }
         } else {let c = confirm("do you want to skip welcome")
         if(c === false){
          alert("welcome "+" "+n)
         }
        } 
    }
    

    
    
}