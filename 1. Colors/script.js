var index = 0; 
var colors = ["green", "purple", "red", "yellow", "blue"];

function callColors() {
    document.body.style.background = colors[index];
}

function changeColors1() {
    callColors();
    
    index++;
    if (index > colors.length - 1) 
        index = 0;
}

function changeColors2() {
    index--;
    if (index < 0)
        index = colors.length - 1;

    callColors();

}

function clearColors() {
    document.body.style.backgroundColor = "white"; 

    index = 0; 
}