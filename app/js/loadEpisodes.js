let podcastDataJSON;
let podcastName;
let podcastAbout;
let podcastCoverPhoto;

let windowTitle = 'Revealed Radio Network | ';

let videosNumber = document.getElementById('videosNumber');

let coverPhoto = document.getElementById('coverPhoto');
let podcastTitle = document.getElementById('podcastTitle');
let podcastDiscription = document.getElementById('podcastDiscription');

// determins which podcast to load based on the URL

if (document.URL == 'https://revealedradionetwork.site/show.html#theoracle' || document.URL == 'https://revealedradionetwork.site/show.html#theoracle' || document.URL == 'http://127.0.0.1:5500/show.html#theoracle' || document.URL == 'http://127.0.0.1:5500/show.html#theoracle') {
    podcastDataJSON = 'https://api.npoint.io/6037308b5a66a8c69980';
    podcastName = 'The Oracle';
    podcastAbout = `The Oracle with John R. Wilson III is a deep and thought-provoking podcast where Pastor John Wilson explores the essence, nature, and identity of God, the profound truths of His Kingdom, and the realities of life. With biblical insight and spiritual wisdom, each episode unveils the mysteries of Scripture while offering practical applications to help you walk in blessing, purpose, joy, and victory. Tune in as Pastor Wilson delivers revelation that will strengthen your faith and illuminate your path.`;
    podcastCoverPhoto = '../res/images/rrn_podcasts/theoracle-preview.jpeg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#therevealedreport' || document.URL == 'https://revealedradionetwork.site/show.html#therevealedreport' || document.URL == 'http://127.0.0.1:5500/show.html#therevealedreport' || document.URL == 'http://127.0.0.1:5500/show.html#therevealedreport') {
    podcastDataJSON = 'https://api.npoint.io/f0c6937151ed27045c14';
    podcastName = 'The Revealed Report';
    podcastAbout = `In a world filled with spin and deception, The Revealed Report cuts through the noise. Join John R. Wilson III for bold yet compassionate news analysis—hard-hitting, factual, and free of the foul language and corruption found in much of today’s media. With a mix of humor, insight, and godly wisdom, John dives deep into history, politics, world affairs, and culture, exposing lies and revealing truth from a biblical perspective. Stay informed. Stay grounded. Welcome to The Revealed Report.`;
    podcastCoverPhoto = 'res/images/rrn_podcasts/therevealedreport-preview.jpeg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#thebiblicalamericankids' || document.URL == 'https://revealedradionetwork.site/show.html#thebiblicalamericankids' || document.URL == 'http://127.0.0.1:5500/show.html#thebiblicalamericankids' || document.URL == 'http://127.0.0.1:5500/show.html#thebiblicalamericankids') {
    podcastDataJSON = 'https://api.npoint.io/80ca41790c5e141aca9b';
    podcastName = 'The Biblical American Kids Podcast';
    podcastAbout = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas suscipit similique sequi numquam, quasi nisi quia praesentium reprehenderit omnis, necessitatibus esse, totam error in fugit laborum sunt tempora. Eos.`;
    podcastCoverPhoto = 'res/images/rrn_podcasts/thebiblicalamericankids-preview.jpeg';

    loadEpisodes();
} else {
    // this calls after all trys meaning the podcast doesnt exists, later this should be changes to a 404 page.
    window.location.href = 'index.html';
}

function loadEpisodes() {

    document.title = windowTitle + podcastName;

    podcastTitle.innerText = podcastName;

    podcastDiscription.innerText = podcastAbout;

    coverPhoto.style.background = 'url("' + podcastCoverPhoto + '")';
    coverPhoto.style.backgroundRepeat = 'no-repeat';
    coverPhoto.style.backgroundSize = 'cover';
    coverPhoto.style.backgroundPosition = 'center';

    $.getJSON(podcastDataJSON, function (podcastData) {
        let episodesContainerNewest = document.getElementById('episodesContainerNewest');
        let episodesContainerOldest = document.getElementById('episodesContainerOldest');

        videosNumber.innerText = podcastData.length + ' videos';

        for (let i = podcastData.length - 1; i >= podcastData.length - podcastData.length; i--) {

            let newEpisodeContainer = document.createElement('div');
            let newEpisodeSrc = document.createElement('a');
            let newEpisodeThumbnail = document.createElement('div');
            let newEpisodeTime = document.createElement('span');
            let newEpisodeTitle = document.createElement('h3');
            let newEpisodeDate = document.createElement('span');

            newEpisodeContainer.classList.add('episode-container');
            newEpisodeThumbnail.classList.add('episode-thumbnail');

            newEpisodeSrc.href = podcastData[i].videoSrc;
            newEpisodeSrc.setAttribute('target', "_blank");
            newEpisodeThumbnail.style.backgroundImage = 'url(' + podcastData[i].videoThumbnail + ')'
            newEpisodeTime.innerText = podcastData[i].videoTime;
            newEpisodeTitle.innerText = podcastData[i].videoTitle;
            newEpisodeDate.innerText = podcastData[i].videoDate;

            newEpisodeContainer.appendChild(newEpisodeThumbnail);
            newEpisodeThumbnail.appendChild(newEpisodeTime);
            newEpisodeContainer.appendChild(newEpisodeTitle);
            newEpisodeContainer.appendChild(newEpisodeDate);
            newEpisodeSrc.appendChild(newEpisodeContainer);
            episodesContainerNewest.appendChild(newEpisodeSrc);
        }
        for (let i = 0; i <= podcastData.length; i++) {

            let newEpisodeContainer = document.createElement('div');
            let newEpisodeSrc = document.createElement('a');
            let newEpisodeThumbnail = document.createElement('div');
            let newEpisodeTime = document.createElement('span');
            let newEpisodeTitle = document.createElement('h3');
            let newEpisodeDate = document.createElement('span');

            newEpisodeContainer.classList.add('episode-container');
            newEpisodeThumbnail.classList.add('episode-thumbnail');

            newEpisodeSrc.href = podcastData[i].videoSrc;
            newEpisodeSrc.setAttribute('target', "_blank");
            newEpisodeThumbnail.style.backgroundImage = 'url(' + podcastData[i].videoThumbnail + ')'
            newEpisodeTime.innerText = podcastData[i].videoTime;
            newEpisodeTitle.innerText = podcastData[i].videoTitle;
            newEpisodeDate.innerText = podcastData[i].videoDate;

            newEpisodeContainer.appendChild(newEpisodeThumbnail);
            newEpisodeThumbnail.appendChild(newEpisodeTime);
            newEpisodeContainer.appendChild(newEpisodeTitle);
            newEpisodeContainer.appendChild(newEpisodeDate);
            newEpisodeSrc.appendChild(newEpisodeContainer);
            episodesContainerOldest.appendChild(newEpisodeSrc);
        }
    });
}

// checks for url change

let windowLocation = window.location.href;

setInterval(() => {
    if (windowLocation != window.location.href) {
        window.location.reload();
    }
}, "2000");

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