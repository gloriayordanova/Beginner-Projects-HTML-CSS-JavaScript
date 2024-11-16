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








let quoteArray = []; 
let index = 0; 
let textPosition = 0; 
let flag = true;

loadQuote = () => {
  const url = 'https://api.quotable.io/random';  

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      quoteArray[index] = data.content; 
   })

   .catch(error => console.log(error));
}

  typewriter = () => {  
  if(flag){
    loadQuote(); 
    quoteArray[index] += ""; 
    flag = false;
  }

  document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray[index].length){
    setTimeout("typewriter()", 100);
  }
  else{
    quoteArray[index] = ' ';
    setTimeout("typewriter()", 4000);
    textPosition = 0;
    flag = true;
  }   
}

window.addEventListener('load', typewriter);