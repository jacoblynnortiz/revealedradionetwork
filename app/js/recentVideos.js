$.getJSON('https://api.npoint.io/7c772fa40349862754f2', function (recentVideos) {
    let recentVideosContainer = document.getElementById('recentVideosContainer');

    for (let i = 0; i <= 3; i++) {

        let newRecentVideoContainer = document.createElement('div');
        newRecentVideoContainer.classList.add('recent-video')

        let newRecentVideoSrc = document.createElement('a');
        let newRecentVideoThumbailContainer = document.createElement('div');
        let newRecentVideoThumbail = document.createElement('img');
        let newRecentVideoPlayIcon = document.createElement('span');
        let newRecentVideoTitle = document.createElement('h3');

        newRecentVideoSrc.href = recentVideos[i].videoSrc;
        newRecentVideoSrc.setAttribute('target', "_blank");
        newRecentVideoThumbail.src = recentVideos[i].videoThumbnail;

        newRecentVideoPlayIcon.innerHTML = '<i class="fa-brands fa-youtube"></i>';

        newRecentVideoTitle.innerText = recentVideos[i].videoTitle;

        newRecentVideoContainer.appendChild(newRecentVideoSrc);
        newRecentVideoSrc.appendChild(newRecentVideoThumbailContainer);
        newRecentVideoThumbailContainer.appendChild(newRecentVideoThumbail);
        newRecentVideoThumbailContainer.appendChild(newRecentVideoPlayIcon);
        newRecentVideoSrc.appendChild(newRecentVideoTitle);
        recentVideosContainer.appendChild(newRecentVideoContainer);
    }
});