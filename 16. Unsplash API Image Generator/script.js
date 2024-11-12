const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load', dayNightMode);

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        loadImg();
    }
});

function loadImg() {
    removeImages();

    const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

    fetch(url) //Sends a GET request to the constructed URL.
        .then(response => { //Processes the response object returned by the fetch call.
            console.log(response);
            if (response.ok) { //Checks if the response status is in the 200–299 range, indicating a successful request.
                return response.json();  //If the response is OK, it returns a promise that resolves with the parsed JSON data.
            } else {
                alert(response.status); //If the response is not OK (e.g., a 404 or 500 error), an alert is shown with the status code.
            }
        })
        .then(data => {  //data => { ... }: Processes the parsed JSON data from the API
            const imageNodes = []; //Initializes an empty array to hold the div elements for each image.
            for (let i = 0; i < data.results.length; i++) {  //Iterates through each result in data.results, where results contains an array of image objects from the API.
                imageNodes[i] = document.createElement('div');
                imageNodes[i].className = 'img';
                imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.raw + ')';  //Sets the backgroundImage style of the div to display the image using the raw URL from the API.
                imageNodes[i].addEventListener('dblclick', function() {
                    window.open(data.results[i].links.download, '_blank'); //Opens a new tab with the direct download link for the image.
                });
                grid.appendChild(imageNodes[i]); //Adds the div containing the image to the grid element.
            }
        })
        .catch(error => { //Catches any errors that occur during the fetch call or while processing the response.
            console.error('Error fetching images:', error);  //Logs an error message to the console for debugging purposes.
        });
}

function removeImages() {
    grid.innerHTML = '';
}

function dayNightMode() {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 7 && hour <= 19) {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}





/* Example response JSON:
{
    "total": 1000,
    "total_pages": 100,
    "results": [
      {
        "id": "1a2b3c4d",
        "urls": {
          "raw": "https://images.unsplash.com/photo-1a2b3c4d?ixid=Mnw...",
          "full": "https://images.unsplash.com/photo-1a2b3c4d?crop=entropy&cs=srgb&fm=jpg...",
          "regular": "https://images.unsplash.com/photo-1a2b3c4d?crop=entropy&cs=tinysrgb&fit=max&...",
          "small": "https://images.unsplash.com/photo-1a2b3c4d?crop=entropy&cs=tinysrgb&fit=max&...",
          "thumb": "https://images.unsplash.com/photo-1a2b3c4d?crop=entropy&cs=tinysrgb&fit=max&...",
        },
        "links": {
          "download": "https://unsplash.com/photos/1a2b3c4d/download?force=true",
          "self": "https://api.unsplash.com/photos/1a2b3c4d"
        },
        "user": {
          "id": "user123",
          "name": "John Doe",
          "portfolio_url": "https://johnsportfolio.com"
        },
        "alt_description": "a beautiful mountain range with a clear blue sky"
      },
      {
        "id": "2b3c4d5e",
        "urls": {
          "raw": "https://images.unsplash.com/photo-2b3c4d5e?ixid=Mnw...",
          "full": "https://images.unsplash.com/photo-2b3c4d5e?crop=entropy&cs=srgb&fm=jpg...",
          "regular": "https://images.unsplash.com/photo-2b3c4d5e?crop=entropy&cs=tinysrgb&fit=max&...",
          "small": "https://images.unsplash.com/photo-2b3c4d5e?crop=entropy&cs=tinysrgb&fit=max&...",
          "thumb": "https://images.unsplash.com/photo-2b3c4d5e?crop=entropy&cs=tinysrgb&fit=max&...",
        },
        "links": {
          "download": "https://unsplash.com/photos/2b3c4d5e/download?force=true",
          "self": "https://api.unsplash.com/photos/2b3c4d5e"
        },
        "user": {
          "id": "user456",
          "name": "Jane Smith",
          "portfolio_url": "https://janesportfolio.com"
        },
        "alt_description": "sunset over a snow-capped mountain"
      }
      // More results...
    ]
  }
*/
