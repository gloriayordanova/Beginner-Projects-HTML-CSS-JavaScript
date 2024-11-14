const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

// Create and style a loading indicator
const loadingIndicator = document.createElement('div');
loadingIndicator.id = 'loading-indicator';
loadingIndicator.innerHTML = '<div class="spinner"></div>'; // Add a spinner icon
loadingIndicator.style.position = 'fixed';
loadingIndicator.style.top = '50%';
loadingIndicator.style.left = '50%';
loadingIndicator.style.transform = 'translate(-50%, -50%)';
loadingIndicator.style.display = 'none';
document.body.appendChild(loadingIndicator);

// Add CSS for the spinner
const style = document.createElement('style');
style.textContent = `
    .spinner {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

window.addEventListener('load', dayNightMode);

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        loadImg();
    }
});

function loadImg() {
    removeImages();
    showLoading(); // Show loading indicator

    const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert(response.status);
                hideLoading(); // Hide loading on failure
            }
        })
        .then(data => {
            setTimeout(() => { // Wait 1.5 seconds before showing images
                const imageNodes = [];
                for (let i = 0; i < data.results.length; i++) {
                    imageNodes[i] = document.createElement('div');
                    imageNodes[i].className = 'img';
                    imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.raw + ')';
                    imageNodes[i].addEventListener('dblclick', function() {
                        window.open(data.results[i].links.download, '_blank');
                    });
                    grid.appendChild(imageNodes[i]);
                }
                hideLoading(); // Hide loading when images are loaded
            }, 1500);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            hideLoading(); // Hide loading on error
        });
}

function removeImages() {
    grid.innerHTML = '';
}

function showLoading() {
    loadingIndicator.style.display = 'block';
}

function hideLoading() {
    loadingIndicator.style.display = 'none';
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







/* FYI Example response JSON:
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
