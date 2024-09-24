const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []; 

contentArray.forEach(divMaker); 

function divMaker(text) {  
    let div = document.createElement("div"); 
    let h2Question = document.createElement("h2");
    let h2Answer = document.createElement("h2");

    div.className = 'flashcard'; 

    h2Question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
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

    flashcards.appendChild(div); 
}

function addFlashcard() { 
    let flashcardInfo = {
        'my_question': question.value,
        'my_answer': answer.value
    };

    contentArray.push(flashcardInfo); 
    localStorage.setItem('items', JSON.stringify(contentArray));  
    divMaker(contentArray[contentArray.length - 1]); 
    question.value = '';
    answer.value = '';
}

function delFlashCards() { 
    localStorage.clear(); 
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox() { 
    createBox.style.display = "block";
}

function hideCreateBox() { 
    createBox.style.display = "none";
}

function calculateNumberFlashCards(){
    const numberOfFlashcards = flashcards.getElementsByClassName('flashcard').length;
    
    // Display the result in the console or on the screen
    console.log(`Number of flashcards: ${numberOfFlashcards}`);
    
    // Optionally, display the result in an HTML element
    let displayElement = document.getElementById("flashcardCount");
    
    if (!displayElement) {
        // If the display element doesn't exist, create it
        /*
        flashcards.parentNode.insertBefore(displayElement, flashcards): This inserts the newly created <p> element into the DOM. Specifically, it inserts it just before the flashcards container (the parent of the flashcards element is used to ensure correct placement).
This ensures that the newly created paragraph is added to the page, and it will be used to display the number of flashcards.
        */
        displayElement = document.createElement("p");
        displayElement.id = "flashcardCount";
        flashcards.parentNode.insertBefore(displayElement, flashcards);
    }
    
    displayElement.innerHTML = `Number of flashcards: ${numberOfFlashcards}`;
}