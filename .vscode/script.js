const apiKey = 'YOUR_GOOGLE_API_KEY';

function getNearbyLocations() {
    const location = document.getElementById('locationInput').value;
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => console.error('Error:', error));
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.textContent = place.name;
        resultsDiv.appendChild(placeElement);
    });
}
