let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
let operators = document.querySelectorAll(".operator");

let operator = Array.from(operators);
// console.log(operators);

let string = "" // to store result

let arr = Array.from(buttons);

arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML === "="){
            string=eval(string);
            input.value = string;

        }

        else if(e.target.innerHTML === "AC"){
            string = ""
            input.value=0
        }else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        
        else{
            string+=e.target.innerHTML;
            input.value = string;
        }
        // console.log(e.target)
        
    })
})