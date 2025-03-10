let videosNumber = document.getElementById('videosNumber');

$.getJSON('https://api.npoint.io/6037308b5a66a8c69980', function (theoracleEpisodes) {
    let episodesContainerNewest = document.getElementById('episodesContainerNewest');
    let episodesContainerOldest = document.getElementById('episodesContainerOldest');

    videosNumber.innerText = theoracleEpisodes.length + ' videos';

    for (let i = theoracleEpisodes.length - 1; i >= theoracleEpisodes.length - theoracleEpisodes.length; i--) {

        let newEpisodeContainer = document.createElement('div');
        let newEpisodeSrc = document.createElement('a');
        let newEpisodeThumbnail = document.createElement('div');
        let newEpisodeTime = document.createElement('span');
        let newEpisodeTitle = document.createElement('h3');
        let newEpisodeDate = document.createElement('span');

        newEpisodeContainer.classList.add('episode-container');
        newEpisodeThumbnail.classList.add('episode-thumbnail');

        newEpisodeSrc.href = theoracleEpisodes[i].videoSrc;
        newEpisodeSrc.setAttribute('target', "_blank");
        newEpisodeThumbnail.style.backgroundImage = 'url(' + theoracleEpisodes[i].videoThumbnail + ')'
        newEpisodeTime.innerText = theoracleEpisodes[i].videoTime;
        newEpisodeTitle.innerText = theoracleEpisodes[i].videoTitle;
        newEpisodeDate.innerText = theoracleEpisodes[i].videoDate;

        newEpisodeContainer.appendChild(newEpisodeThumbnail);
        newEpisodeThumbnail.appendChild(newEpisodeTime);
        newEpisodeContainer.appendChild(newEpisodeTitle);
        newEpisodeContainer.appendChild(newEpisodeDate);
        newEpisodeSrc.appendChild(newEpisodeContainer);
        episodesContainerNewest.appendChild(newEpisodeSrc);
    }
    for (let i = 0; i <= theoracleEpisodes.length; i++) {

        let newEpisodeContainer = document.createElement('div');
        let newEpisodeSrc = document.createElement('a');
        let newEpisodeThumbnail = document.createElement('div');
        let newEpisodeTime = document.createElement('span');
        let newEpisodeTitle = document.createElement('h3');
        let newEpisodeDate = document.createElement('span');

        newEpisodeContainer.classList.add('episode-container');
        newEpisodeThumbnail.classList.add('episode-thumbnail');

        newEpisodeSrc.href = theoracleEpisodes[i].videoSrc;
        newEpisodeSrc.setAttribute('target', "_blank");
        newEpisodeThumbnail.style.backgroundImage = 'url(' + theoracleEpisodes[i].videoThumbnail + ')'
        newEpisodeTime.innerText = theoracleEpisodes[i].videoTime;
        newEpisodeTitle.innerText = theoracleEpisodes[i].videoTitle;
        newEpisodeDate.innerText = theoracleEpisodes[i].videoDate;

        newEpisodeContainer.appendChild(newEpisodeThumbnail);
        newEpisodeThumbnail.appendChild(newEpisodeTime);
        newEpisodeContainer.appendChild(newEpisodeTitle);
        newEpisodeContainer.appendChild(newEpisodeDate);
        newEpisodeSrc.appendChild(newEpisodeContainer);
        episodesContainerOldest.appendChild(newEpisodeSrc);
    }
});

// detects language change to post to the respective database

document.getElementById("newToOldSwitcher").onchange = function () {
    if (this.value == 'newest') {
        episodesContainerNewest.style.display = 'flex';
        episodesContainerOldest.style.display = 'none';
    } else if (this.value == 'oldest') {
        episodesContainerNewest.style.display = 'none';
        episodesContainerOldest.style.display = 'flex';
    }
};