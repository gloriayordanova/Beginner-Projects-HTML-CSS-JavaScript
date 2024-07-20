var index = 0;

function changeColors() {
    var colors = ["green", "purple", "red", "yellow", "blue"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1) 
    index = 0;
}