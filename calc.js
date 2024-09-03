let display=document.querySelector(".display");
let button=document.querySelectorAll(".digit");


let string="";
button.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(item.innerText=="="){
            string=eval(string);
            display.innerText=string;
        }
        else if(item.innerText=="AC"){
            string="";
            display.innerText=string;
        }
        else if(item.innerText=="DEL"){
            string=string.substring(0,string.length-1);
            display.innerText=string;
        }
        else{
            string+=item.innerText;
            display.innerText=string;
        }
    })
})