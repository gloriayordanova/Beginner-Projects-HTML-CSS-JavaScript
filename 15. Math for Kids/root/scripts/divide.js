const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
let answer = 0;

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = message;
    messageElement.style.display = "block"; 
    setTimeout(() => {
        messageElement.style.display = "none"; 
    }, 2000); 
}

function generate_equation() {
    let num2 = Math.floor(Math.random() * 12) + 1; 
    let multiplier = Math.floor(Math.random() * 12) + 1; 
    let num1 = num2 * multiplier;

    answer = num1 / num2;

    let dummyAnswer1 = Math.floor(Math.random() * 13);
    while (dummyAnswer1 == answer) {
        dummyAnswer1 = Math.floor(Math.random() * 13);
    }

    let dummyAnswer2 = Math.floor(Math.random() * 13);
    while (dummyAnswer2 == answer || dummyAnswer2 == dummyAnswer1) {
        dummyAnswer2 = Math.floor(Math.random() * 13);
    }

    let allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    let switchAnswers = [];

    for (let i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) {
        showMessage("👏Amazing!");
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) {
        showMessage("👏Awesome!");
        generate_equation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) {
        generate_equation();
        showMessage("👏Great!");
    } else {
        audio.play();
    }
});

generate_equation();