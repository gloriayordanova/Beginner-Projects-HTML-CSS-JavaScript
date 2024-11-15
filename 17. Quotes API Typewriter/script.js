// let quoteArray = [];
// let index = 0; 
// let textPosition = 0; 
// let flag = true;

// // Replace with a predefined set of quotes
// quoteArray = [
//   "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
//   "The way to get started is to quit talking and begin doing. - Walt Disney",
//   "Life is what happens when you're busy making other plans. - John Lennon",
//   "Don't let yesterday take up too much of today. - Will Rogers",
//   "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown"
// ];

// // Function to display the typewriter effect
// typewriter = () => {
//   if (flag) {
//     // Randomly select a new quote
//     index = Math.floor(Math.random() * quoteArray.length);
//     flag = false;
//   }

//   document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>▮</span>';

//   if (textPosition++ != quoteArray[index].length) {
//     setTimeout(typewriter, 100);
//   } else {
//     // Reset for the next cycle
//     setTimeout(() => {
//       textPosition = 0;
//       flag = true;
//       typewriter();
//     }, 4000);
//   }
// };

// // Start typewriter effect on window load
// window.addEventListener('load', typewriter);








let quoteArray = []; // An array to store the quotes fetched from the API.
let index = 0; //Used as a pointer for the current quote in quoteArray. It remains 0 in this code.
let textPosition = 0; //Keeps track of the position of the current character being displayed by the typewriter effect.
let flag = true; //A boolean flag to control the quote loading logic.

loadQuote = () => {
  const url = 'https://api.quotable.io/random';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      quoteArray[index] = data.content; //he response is converted to JSON and the content property (the quote text) is stored in quoteArray at position index.
   })

   .catch(error => console.log(error));
}

  typewriter = () => {  //The typewriter() function controls the typewriter animation.
  if(flag){
    loadQuote(); //If flag is true, it calls loadQuote() to fetch a new quote and appends an empty string to ensure the content is a string.
    quoteArray[index] += ""; // Ensures the quote is treated as a string
    flag = false; // Ensures `loadQuote()` runs only once at the start
  }

  document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>'; //The document.querySelector("#quote").innerHTML line updates an HTML element with the ID quote to display the current portion of the quote with a blinking cursor (<span>\u25AE</span>).

  if(textPosition++ != quoteArray[index].length){ //textPosition++ != quoteArray[index].length checks if the typewriter has reached the end of the current quote. If not, typewriter() is called again after 100 milliseconds.
    setTimeout("typewriter()", 100);
  }
  else{
    quoteArray[index] = ' '; // Clears the current quote after it's been displayed
    setTimeout("typewriter()", 4000); //Once the quote is fully displayed, the code waits for 4 seconds (setTimeout("typewriter()", 4000)) before resetting for the next quote.
    textPosition = 0; //The textPosition is reset to prepare for the next cycle.
    flag = true; //The flag is reset to prepare for the next cycle.
  }   
}

window.addEventListener('load', typewriter);