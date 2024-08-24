const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const userInput = document.getElementById("userInput");
const allItems = document.getElementById("allItems");

pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        addItem();
    }
})
















// function addItem(){
//     let itemContainer = document.createElement("div");
//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.style.marginLeft = -150;
//     checkbox.style.scale = 1;

//     let label = document.createElement("label");
//     label.innerHTML = userInput.value;
//     label.style.margin = -160;
//     label.style.fontSize = 30;

//     checkbox.addEventListener("change", function() {
//         if (checkbox.checked) {
//             label.style.textDecoration = "line-through";
//         } else {
//             label.style.textDecoration = "none";
//         }
//     });

//     itemContainer.appendChild(checkbox);
//     itemContainer.appendChild(label);
//     allItems.appendChild(itemContainer);

//     userInput.value = "";
// }




























// const groceries = document.getElementsByClassName("groceries")[0];
// const pencil = document.getElementById("pencil");
// const allItems = document.getElementById("allItems");
// const userInput = document.getElementById("userInput");

// pencil.addEventListener("click", function(){
//     allItems.innerHTML = "";
// })

// userInput.addEventListener("keydown", function(event){
//     if(event.key == "Enter")
//         addItem();
// })

// function addItem(){
//     let h2 = document.createElement("h2");
//     h2.innerHTML = "- " + userInput.value;

//     h2.addEventListener("click", function(){
//         h2.style.textDecoration = "line-through";
//     })

//     allItems.insertAdjacentElement("beforeend", h2);

//     userInput.value = "";
// }