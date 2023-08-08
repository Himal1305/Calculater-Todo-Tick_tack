buttons=document.querySelectorAll("button");
str="";

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
    
    if(e.target.innerHTML == "="){
        console.log("e.targe")
        str= eval(str);
        console.log(str);
        document.querySelector("input").value=str;

    }
    else if(e.target.innerHTML == "AC"){
        console.log("dd")
        str="";
        document.querySelector("input").value=str;

    }
        
    else {
    str= str + e.target.innerHTML;
    document.querySelector("input").value=str;
    }
    
})
})