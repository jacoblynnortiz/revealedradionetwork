let watchContainer = document.getElementById('watchContainer');

let videoSrc = document.getElementById('videoSrc');
let videoTitle = document.getElementById('videoTitle');
let videoPostDate = document.getElementById('videoPostDate');
let videoDiscription = document.getElementById('videoDiscription');

let videoDiscriptionShort, videoDiscriptionLong;

let showAllDiscription = document.getElementById('showAllDiscription');

let discriptionRevealed = false;

let changeViewMode = document.getElementById('changeViewMode');
let currentViewingMode = 'default';

let podcastChannelID, podcastVideoID;
let podcastDatabaseLink;


function getUrlID(url) {
    try {
        const parsedUrl = new URL(url);
        const searchParams = parsedUrl.searchParams;
        const id = searchParams.get('v');
        return id;
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}

// Example usage with a specific URL
const url = document.URL;
const videoID = getUrlID(url);
console.log("Video ID:", videoID); // Output: Product ID: 456
deconstructVideoID(videoID)

function deconstructVideoID(videoID) {
    podcastChannelID = videoID.substring(0, 3);
    podcastChannelID = podcastChannelID.replace(/^0+/, '');

    podcastVideoID = videoID.substring(4, 9);
    podcastVideoID = podcastVideoID.replace(/^0+/, '');
    podcastVideoID = parseInt(podcastVideoID) - 1;

    console.log('Podcast Channel: ' + podcastChannelID);
    console.log('Podcast Video: ' + podcastVideoID);

    assembleWatchPage(podcastChannelID, podcastVideoID);
    assemblesideBar(podcastChannelID, podcastVideoID);
}

function assembleWatchPage(podcastChannelID, podcastVideoID) {

    switch (podcastChannelID) {
        case '1': podcastDatabaseLink = 'https://sheetdb.io/api/v1/ndxmp4t6jlvbp'; break;
        case '2': podcastDatabaseLink = 'https://sheetdb.io/api/v1/7u0bj75hc0n2e'; break;
        case '3': podcastDatabaseLink = 'https://sheetdb.io/api/v1/vr3um2xhhhmll'; break;
        case '4': podcastDatabaseLink = 'https://sheetdb.io/api/v1/7mv60bvaa9bby'; break;
        case '5': podcastDatabaseLink = 'https://sheetdb.io/api/v1/6dba9pjq7l8h0'; break;
        case '6': podcastDatabaseLink = 'https://sheetdb.io/api/v1/2k45bdta4s76d'; break;
        case '7': podcastDatabaseLink = 'https://sheetdb.io/api/v1/nbzgqllakxni9'; break;
        case '8': podcastDatabaseLink = 'https://sheetdb.io/api/v1/fo66a4dl8sjpt'; break;
    }

    $.getJSON(podcastDatabaseLink, function (podcastData) {
        for (let i = 0; i < podcastData.length; i++) {
            // code goes here

            videoSrc.innerHTML = podcastData[podcastVideoID].videoSrc;
            videoSrc.firstChild.src = videoSrc.firstChild.src + "?autoplay=1&rel=0";

            videoTitle.innerText = podcastData[podcastVideoID].videoTitle;
            videoPostDate.innerText = podcastData[podcastVideoID].videoDate;
            videoDiscription.innerText = podcastData[podcastVideoID].videoDiscription;
            document.title = 'Revealed Radio Network | ' + podcastData[podcastVideoID].videoTitle;


            if (podcastData[podcastVideoID].videoDiscription.length > 600) {
                videoDiscriptionShort = videoDiscription.innerText.substring(0, 600);
                videoDiscriptionLong = videoDiscription.innerText;
                showAllDiscription.style.display = 'flex';
                discriptionRevealed = false;

                videoDiscription.innerText = videoDiscriptionShort;
            }

            if (videoDiscription.innerText == 'No Discription Available.' || videoDiscription.innerText == '') {
                videoDiscription.style.fontStyle = 'italic';
                videoDiscription.style.color = '#888';
            }
        }
    });
}

changeViewMode.addEventListener('click', function () {
    if (currentViewingMode == 'default') {
        watchContainer.classList.add('theaterMode');
        watchContainer.classList.remove('defaultMode');
        changeViewMode.setAttribute('title', 'Default mode');

        currentViewingMode = 'theater';
    } else if (currentViewingMode == 'theater') {
        watchContainer.classList.remove('theaterMode');
        watchContainer.classList.add('defaultMode');
        changeViewMode.setAttribute('title', 'Theater mode');

        currentViewingMode = 'default';
    }
});

showAllDiscription.addEventListener('click', toggleDiscription);

function toggleDiscription() {
    if (discriptionRevealed == true) {
        showAllDiscription.innerText = 'Show more';
        videoDiscription.innerText = videoDiscriptionShort;
        discriptionRevealed = false;
    } else {
        showAllDiscription.innerText = 'Show less';
        videoDiscription.innerText = videoDiscriptionLong;
        discriptionRevealed = true;
    }
}

if (window.matchMedia('screen and (max-width: 1250px)').matches) {
    watchContainer.classList.add('theaterMode');
    watchContainer.classList.remove('defaultMode');
}