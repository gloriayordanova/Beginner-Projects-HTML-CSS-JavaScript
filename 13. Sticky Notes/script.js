let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check-icon");
let xIcon = document.getElementById("x-icon");
let i = 0;

xIcon.addEventListener("click", function(){
    typeNote();
});

checkIcon.addEventListener("click", function(){
    createNote();
});

function typeNote(){
    if (container3.style.display == "none"){
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote(){ //FINALLY (it was just there, but nothing more was filled in)
    let noteText = document.getElementById("note-text").value;
    let node0 = document.createElement("div");
    let node1 = document.createElement("h1");

    node1.innerHTML = noteText;

    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0 rgba(0, 0, 0, 0.75)"); // after this line we add this line straight away node1.style.margin = margin() and node1.style.transform = rotate(); and node1.style.background = color();

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0); //after this he adds this line above 

    //we do that finally from here below to make them appear bigger
    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    });

    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    });

    node0.addEventListener("dblclick", function(){
        node0.remove();
    })

    document.getElementById("note-text").value = ''; //gy not sure if this is when we double click to delete note
};

function margin() {
    let random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    let random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    let random_color = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
    if (i > random_color.length - 1) {
        i = 0; //then go to the typeNote() function (it was just there, but nothing more was filled in)
    }
    return random_color[i++];
}