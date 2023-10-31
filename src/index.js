console.log('%c HI', 'color: firebrick')
// index.js
document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    const dogImageContainer = document.getElementById('dog-image-container');

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                dogImageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));

    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const dogBreedList = document.getElementById('dog-breeds');
    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const listItem = document.createElement('li');
                listItem.textContent = breed;
                dogBreedList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));

    dogBreedList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change font color to blue on click
        }
    });

    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        const selectedLetter = event.target.value;
        const breedItems = dogBreedList.getElementsByTagName('li');
        Array.from(breedItems).forEach(item => {
            if (item.textContent.startsWith(selectedLetter)) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
