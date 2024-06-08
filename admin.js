document.addEventListener('DOMContentLoaded', function() {
    loadAnalytics();
    setupEventHandlers();
});

function loadAnalytics() {
    fetch('/v1/report/analytics')
        .then(response => response.json())
        .then(analytics => {
            document.getElementById('popularAlbums').textContent = `Popular Albums: ${analytics.popularAlbums}`;
            document.getElementById('popularTracks').textContent = `Popular Tracks: ${analytics.popularTracks}`;
            document.getElementById('popularGenres').textContent = `Popular Genres: ${analytics.popularGenres}`;
        })
        .catch(error => console.error('Error loading analytics:', error));
}

function setupEventHandlers() {
    // Add event listeners for CRUD operations here
}
