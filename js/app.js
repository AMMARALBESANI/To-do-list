'use strict';




let n = prompt("please enter your name")
if (n == ""){
    prompt("please add yor name ")

}

    
let age = prompt("please"+" "+n+" "+"enter your age")

    if (age <=0){
        prompt("please enter valid age")
     }


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

 
 
       let question =[prompt("Are you student"),prompt("Would you rate us"),prompt("Is our app useful")];
       let answer =[];
       function traverse (){
          for(let i =0; i<question.length;i++){
              if (question[i]=="yes"){
             answer.push(question[i])
              }else if(question[i]=="no") {
             answer.push(question[i])
              }else{
                 answer.push("invalid")
              }
       }
       console.log(answer)
       }
       traverse();
     
  

 



