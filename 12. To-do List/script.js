const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const delButton = document.querySelector(".delButton")
const delButtonID = document.getElementById("buttondel");

delButton.style.backgroundColor = 'lightgreen'; delButton.style.borderRadius = '5px'; delButton.style.whiteSpace = 'nowrap';

input.addEventListener("keydown", function(event){ 
    if(event.key == "Enter"){
        addItem();
    }
});

function addItem(){ 
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fa fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        if(checkIcon.style.color == "limegreen"){
            checkIcon.style.color = "lightgrey";
        } else {
            checkIcon.style.color = "limegreen";
        }
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';

    delButtonID.addEventListener("click", function(){
        divParent.remove();
    });
}