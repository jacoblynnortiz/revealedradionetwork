let uploadRecentVideos = document.getElementById('uploadRecentVideos');

uploadRecentVideos.addEventListener("submit", e => {
    e.preventDefault();
    fetch(uploadRecentVideos.action, {
        method: "POST",
        body: new FormData(uploadRecentVideos),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'dashboard.html', '_blank';

    });
});