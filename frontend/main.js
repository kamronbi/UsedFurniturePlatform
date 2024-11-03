document.addEventListener("DOMContentLoaded", () => {
    fetchListings();
});

function fetchListings() {
    fetch('http://localhost:3000/api/items')
        .then(response => response.json())
        .then(data => {
            const listingsDiv = document.getElementById('listings');
            listingsDiv.innerHTML = '';
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
                listingsDiv.appendChild(itemElement);
            });
        });
}
