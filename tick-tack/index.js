let turn="X";
let game=true;
const changeturn =() =>{ 
    document.querySelector(".ending").innerHTML= "Reset" 

    return turn === "X" ? "O":"X"

}

const checkwin =()=>{
    let boxtext=document.getElementsByClassName("boxtetx");
        let wins=[
            [0,1,3],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && ((boxtext[e[0]].innerText !== ""))){
            
            document.querySelector(".turn-x-y").innerHTML= boxtext[e[0]].innerHTML +"- is  WIN" 
           
           
            document.querySelector(".ending").innerHTML= "Start new Game" 
           
            game=false;        
        }
    })
    }




// main javascript

let boxs=document.getElementsByClassName("box");

Array.from(boxs).forEach(element =>{
    let boxtext=element.querySelector(".boxtetx");

    element.addEventListener("click",()=>{
        if(boxtext.innerHTML ===""){
            boxtext.innerHTML=turn;
            turn=changeturn();
            checkwin();
            if(game == true){
                document.querySelector(".turn-x-y").innerHTML=turn +" - Chance"  ;
            }
            

        }
    })
})