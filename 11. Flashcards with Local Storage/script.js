const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //1

contentArray.forEach(divMaker); //8  за локал сторидж това го създаваме като затворим и после отворим страницата да се показва

function divMaker(text) { //7 // we call it that way div, because every flashcard is going to be basically a div element.
    //immmediately look at 8
    let div = document.createElement("div"); //9
    let h2Question = document.createElement("h2");
    let h2Answer = document.createElement("h2");

    div.className = 'flashcard'; //for that flashcard look at the css

    h2Question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px"); //setAttribute will allow us to add many css features
    h2Question.innerHTML = text.my_question;

    h2Answer.setAttribute("style", "text-align:center; display:none; color:red");
    h2Answer.innerHTML = text.my_answer;

    div.appendChild(h2Question);
    div.appendChild(h2Answer);

    div.addEventListener("click", function() {
        if (h2Answer.style.display == "none") {
            h2Answer.style.display = "block";
        } else {
            h2Answer.style.display = "none";
        }
    });

    flashcards.appendChild(div); //we are adding this div element to the flashcards container
}

function addFlashcard() { //5
    let flashcardInfo = {
        'my_question': question.value,
        'my_answer': answer.value
    };

    contentArray.push(flashcardInfo); //6  flashcardInfo is the name of the dictionary
    localStorage.setItem('items', JSON.stringify(contentArray));  // we are giving our localStorage a key of items. //this is how we add contentArray to local storage
    divMaker(contentArray[contentArray.length - 1]); //we want to display the flashcard on the screen, so we are gonna create function called divMaker
    //and we have to pass it this particular data from the flashcard so it could create it,
    //so let's pass the content array. Length - 1 is the last index of the array which is the one we have just filled in with this info.
    //So, this is the one we want to send over to this function
    question.value = '';
    answer.value = '';
}

function delFlashCards() { //2
    localStorage.clear(); //can also do it localStorage.removeItem('items');
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox() { //4
    createBox.style.display = "block";
}

function hideCreateBox() { //3
    createBox.style.display = "none";
}