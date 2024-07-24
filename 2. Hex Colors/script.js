function generateHexColor() {
    const hexNumbers = "0123456789ABCDEF";
    let hexCode = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexCode += hexNumbers[randomIndex];
    }

    return hexCode;
}

function changeColor() {
    const hexCode = generateHexColor();
    document.getElementById("hex-figure").innerHTML = hexCode;
    document.body.style.background = `#${hexCode}`;
}

function changeColorButton() {
    const hexCode = generateHexColor();
    document.getElementById("hex-figure").innerHTML = hexCode;
    document.querySelector('.change-color-button').style.backgroundColor = `#${hexCode}`;
}