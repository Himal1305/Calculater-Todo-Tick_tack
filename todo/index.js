const item=document.querySelector("#item");
const todobox=document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            addtodo(this.value);
            this.value= ""
        }
    }
)

 const addtodo=(items) => {
    const listitems=document.createElement("li");
    listitems.innerHTML= `
    ${items}
    <i class="fa-solid fa-xmark"></i>
    `;
    listitems.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )


    listitems.querySelector("i").addEventListener(
        "click",
        function(){
            listitems.remove()
        }
    )
    todobox.appendChild(listitems)

}

