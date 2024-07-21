var index = 0; 

function changeColors1() {
    var colors = ["green", "purple", "red", "yellow", "blue"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
   
    if (index > colors.length - 1) 
        index = 0;
}

function changeColors2() {
    var colors = ["green", "purple", "red", "yellow", "blue"];

    index--;
    if (index < 0)
        index = colors.length - 1;

    document.getElementsByTagName("body")[0].style.background = colors[index];

}

function clearColors() {
    // Reset the background color to its original state
    document.body.style.backgroundColor = "white"; // Set to the initial state

    // If there are other things to reset, add them here
    index = 0; // Reset the color index if needed
}