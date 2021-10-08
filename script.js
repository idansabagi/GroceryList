
// Varibles 
const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");


pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
        if(event.key == "Enter")
        addItem();
    })


function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = '<i id="list-decoration" class="far fa-square"></i>  ' + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
        document.getElementById("list-decoration").className = "fas fa-check-square";
    })

    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = ""; 
}