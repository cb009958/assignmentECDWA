document.addEventListener('DOMContentLoaded', function() {
    fetchAlbums();

    document.getElementById('albumSearch').addEventListener('input', function() {
        fetchAlbums(this.value, null, null, null);
    });

    document.getElementById('artistFilter').addEventListener('input', function() {
        fetchAlbums(null, this.value, null, null);
    });

    document.getElementById('genreFilter').addEventListener('change', function() {
        fetchAlbums(null, null, this.value, null);
    });

    document.getElementById('yearFilter').addEventListener('input', function() {
        fetchAlbums(null, null, null, this.value);
    });
});

function fetchAlbums(search = '', artist = '', genre = '', year = '') {
    let query = `/v1/albums?search=${encodeURIComponent(search)}&artist=${encodeURIComponent(artist)}&genre=${encodeURIComponent(genre)}&year=${encodeURIComponent(year)}`;
    fetch(query)
        .then(response => response.json())
        .then(data => displayAlbums(data))
        .catch(error => console.error('Error fetching albums:', error));
}

function displayAlbums(albums) {
    const container = document.getElementById('albumsList');
    container.innerHTML = ''; // Clear previous content
    albums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.className = 'album';
        albumElement.innerHTML = `
            <img src="${album.album_art}" alt="Cover of ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist.name}</p>
            <button onclick="window.location.href='album.html?id=${album.id}'">View Details</button>
        `;
        container.appendChild(albumElement);
    });
}
