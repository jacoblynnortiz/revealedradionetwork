let videosNumber = document.getElementById('videosNumber');

$.getJSON('https://api.npoint.io/f0c6937151ed27045c14', function (therevealedreportEpisodes) {
    let episodesContainerNewest = document.getElementById('episodesContainerNewest');
    let episodesContainerOldest = document.getElementById('episodesContainerOldest');

    videosNumber.innerText = therevealedreportEpisodes.length + ' videos';

    for (let i = therevealedreportEpisodes.length - 1; i >= therevealedreportEpisodes.length - therevealedreportEpisodes.length; i--) {

        let newEpisodeContainer = document.createElement('div');
        let newEpisodeSrc = document.createElement('a');
        let newEpisodeThumbnail = document.createElement('div');
        let newEpisodeTime = document.createElement('span');
        let newEpisodeTitle = document.createElement('h3');
        let newEpisodeDate = document.createElement('span');

        newEpisodeContainer.classList.add('episode-container');
        newEpisodeThumbnail.classList.add('episode-thumbnail');

        newEpisodeSrc.href = therevealedreportEpisodes[i].videoSrc;
        newEpisodeSrc.setAttribute('target', "_blank");
        newEpisodeThumbnail.style.backgroundImage = 'url(' + therevealedreportEpisodes[i].videoThumbnail + ')'
        newEpisodeTime.innerText = therevealedreportEpisodes[i].videoTime;
        newEpisodeTitle.innerText = therevealedreportEpisodes[i].videoTitle;
        newEpisodeDate.innerText = therevealedreportEpisodes[i].videoDate;

        newEpisodeContainer.appendChild(newEpisodeThumbnail);
        newEpisodeThumbnail.appendChild(newEpisodeTime);
        newEpisodeContainer.appendChild(newEpisodeTitle);
        newEpisodeContainer.appendChild(newEpisodeDate);
        newEpisodeSrc.appendChild(newEpisodeContainer);
        episodesContainerNewest.appendChild(newEpisodeSrc);
    }
    for (let i = 0; i <= therevealedreportEpisodes.length; i++) {

        let newEpisodeContainer = document.createElement('div');
        let newEpisodeSrc = document.createElement('a');
        let newEpisodeThumbnail = document.createElement('div');
        let newEpisodeTime = document.createElement('span');
        let newEpisodeTitle = document.createElement('h3');
        let newEpisodeDate = document.createElement('span');

        newEpisodeContainer.classList.add('episode-container');
        newEpisodeThumbnail.classList.add('episode-thumbnail');

        newEpisodeSrc.href = therevealedreportEpisodes[i].videoSrc;
        newEpisodeSrc.setAttribute('target', "_blank");
        newEpisodeThumbnail.style.backgroundImage = 'url(' + therevealedreportEpisodes[i].videoThumbnail + ')'
        newEpisodeTime.innerText = therevealedreportEpisodes[i].videoTime;
        newEpisodeTitle.innerText = therevealedreportEpisodes[i].videoTitle;
        newEpisodeDate.innerText = therevealedreportEpisodes[i].videoDate;

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