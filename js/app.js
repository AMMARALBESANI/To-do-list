'use strict';

let n
let arr = [];
getNames();
getAge();
getGender(n);


getAnswers(arr)
printAnswer(arr)

function getNames() {
   n = prompt("please enter your name")
    if (n == "") {
        prompt("please add yor name ")

    }
    
    
 }  
 


function getGender(n) {
    let g = prompt("please enter your gender")
    if (g === "male") {
        let mc = confirm("do you want to skip welcome")
        if (mc === false) {
            alert("welcome Mr" + " " + n)
        }
    } else if (g === "female") {
        let fc = confirm("do you want to skip welcome")
        if (fc === false) {
            alert("welcome Ms" + " " + n)
        }
    } else {
        let c = confirm("do you want to skip welcome")
        if (c === false) {
            alert("welcome " + " " + n)
        }
    }
}

function getAge() {
    let age = prompt("please enter your age")

    if (age <= 0) {
        prompt("please enter valid age")
    }

}




  function getAnswers(arr) {
     let ques1="are you student ?";
     let ques2 ="did you find our website useful ?";
     let ques3="would you rate us";
     arr.push(prompt(ques1));
     arr.push(prompt(ques2));
     arr.push(prompt(ques3));
     
    
}



function printAnswer(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="yes" || arr[i]==="no"){
            console.log(arr[i])
        }else{
            console.log("invalid")
        }
    }
}
