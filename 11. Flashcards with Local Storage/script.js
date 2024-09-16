const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; //1

contentArray.forEach(divMaker); //8  за локал сторидж това го създаваме като затворим и после отворим страницата да се показва

function divMaker(text) { //7 
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

    contentArray.push(flashcardInfo); //6 
    localStorage.setItem('items', JSON.stringify(contentArray));  
    divMaker(contentArray[contentArray.length - 1]); 
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