
let podcastName;

let sideBar = document.getElementById('sideBar');

function assemblesideBar(podcastChannelID, podcastVideoID) {
    let podcastDatabaseLink;

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
        for (let i = podcastData.length - 1; i >= podcastData.length - 10; i--) {
            // code goes here

            let suggestedVideoContainerLink = document.createElement('a');
            let suggestedVideoContainer = document.createElement('div');
            let sugggestedVideoThumbnail = document.createElement('div');
            let suggestedVideoTitle = document.createElement('h3');
            let suggestedVideoTime = document.createElement('span');

            suggestedVideoContainer.classList.add('suggested-video');
            sugggestedVideoThumbnail.classList.add('video-thumbnail');

            let videoIDPartial1 = podcastChannelID;

            switch (videoIDPartial1) {
                case '1': videoIDPartial1 = '001'; break;
                case '2': videoIDPartial1 = '002'; break;
                case '3': videoIDPartial1 = '003'; break;
                case '4': videoIDPartial1 = '004'; break;
                case '5': videoIDPartial1 = '005'; break;
                case '6': videoIDPartial1 = '006'; break;
                case '7': videoIDPartial1 = '007'; break;
                case '8': videoIDPartial1 = '008'; break;
            }
            
            let videoIDTrueEpisodeID = i + 1;

            if (videoIDTrueEpisodeID < 10) {
                videoIDTrueEpisodeID = '0000' + videoIDTrueEpisodeID;
            } else if (videoIDTrueEpisodeID < 100) {
                videoIDTrueEpisodeID = '000' + videoIDTrueEpisodeID;
            } else if (videoIDTrueEpisodeID < 1000) {
                videoIDTrueEpisodeID = '00' + videoIDTrueEpisodeID;
            } else if (videoIDTrueEpisodeID < 10000) {
                videoIDTrueEpisodeID = '0' + videoIDTrueEpisodeID;
            } else if (videoIDTrueEpisodeID > 99999) {
                console.log('there has been an unimaginable error!')
            }

            let videoIDPartial2 = '' + videoIDTrueEpisodeID;
            let videoID = videoIDPartial1 + videoIDPartial2;

            suggestedVideoContainerLink.href = 'watch.html?v=' + videoID;
            sugggestedVideoThumbnail.style.backgroundImage = 'url(' + podcastData[i].videoThumbnail + ')';
            suggestedVideoTitle.innerText = podcastData[i].videoTitle;
            suggestedVideoTime.innerText = podcastData[i].videoTime;

            suggestedVideoContainer.appendChild(sugggestedVideoThumbnail);
            sugggestedVideoThumbnail.appendChild(suggestedVideoTime);
            suggestedVideoContainer.appendChild(suggestedVideoTitle);

            suggestedVideoContainerLink.appendChild(suggestedVideoContainer);
            sideBar.appendChild(suggestedVideoContainerLink);
        }
    });
}