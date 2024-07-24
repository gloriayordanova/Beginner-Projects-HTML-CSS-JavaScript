function changeColor() {
    var hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hexCode = '';

    for(var i = 0; i < 6; i++){
    var randomIndex = Math.floor(Math.random() * hexNumbers.length);

    hexCode += hexNumbers[randomIndex];
    }
    document.getElementById("hex-figure").innerHTML = hexCode;
    document.body.style.background = "#" + hexCode;
}

function changeColorButton() {
    var hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hexCode = '';

    for(var i = 0; i < 6; i++){
    var randomIndex = Math.floor(Math.random() * hexNumbers.length);

    hexCode += hexNumbers[randomIndex];
    }
   
    document.getElementById("hex-figure").innerHTML = hexCode;
    var button = document.querySelector(".change-color-button");
    button.style.backgroundColor = "#" + hexCode;

}

// function generateHexColor() {
//     const hexNumbers = "0123456789ABCDEF";
//     let hexCode = '';

//     for (let i = 0; i < 6; i++) {
//         const randomIndex = Math.floor(Math.random() * hexNumbers.length);
//         hexCode += hexNumbers[randomIndex];
//     }

//     return hexCode;
// }

// function changeColor() {
//     const hexCode = generateHexColor();
//     document.getElementById("hex-figure").innerHTML = hexCode;
//     document.body.style.background = `#${hexCode}`;
// }

// function changeColorButton() {
//     const hexCode = generateHexColor();
//     const button = document.querySelector('.change-color-button');
//     button.style.backgroundColor = `#${hexCode}`;
//     document.getElementById("hex-figure").innerHTML = hexCode;
// }