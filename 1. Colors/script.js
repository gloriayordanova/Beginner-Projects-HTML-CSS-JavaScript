var index1 = 0;

function changeColors1() {
    var colors1 = ["green", "purple", "red", "yellow", "blue"];

    document.getElementsByTagName("body")[0].style.background = colors1[index1++];

    console.log(index1);
    
    if (index1 > colors1.length - 1) 
        index1 = 0;
}

function changeColors2() {
    var colors2 = ["green", "purple", "red", "yellow", "blue"];

    document.getElementsByTagName("body")[0].style.background = colors2[index1--];

    console.log(index1);

    if(index1 < 0)
        index1 = colors2.length - 1;
}