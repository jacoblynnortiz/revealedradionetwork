let podcastUploadForm = document.getElementById('podcastUploadForm');

let checkSelectedPodcast = document.getElementById('checkSelectedPodcast');

document.getElementById("podcastChanger").onchange = function () {
    if (this.value == '0') {
        checkSelectedPodcast.value = '';
        // this is default input - upload to the revealed report
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/ndxmp4t6jlvbp';
    } else if (this.value == '1') {
        checkSelectedPodcast.value = '1';
        // this is to upload to  the revealed report
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/ndxmp4t6jlvbp';
    } else if (this.value == '2') {
        checkSelectedPodcast.value = '1';
        // this is to upload to the oracle
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/7u0bj75hc0n2e';
    } else if (this.value == '3') {
        checkSelectedPodcast.value = '1';
        // this is to upload to the firm foundation
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/vr3um2xhhhmll';
    } else if (this.value == '4') {
        checkSelectedPodcast.value = '1';
        // this is to upload to strength to carry through
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/7mv60bvaa9bby';
    } else if (this.value == '5') {
        checkSelectedPodcast.value = '1';
        // this is to upload to the biblical american kids podcast
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/6dba9pjq7l8h0';
    } else if (this.value == '6') {
        checkSelectedPodcast.value = '1';
        // this is to upload to get in the game with jesus
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/2k45bdta4s76d';
    } else if (this.value == '7') {
        checkSelectedPodcast.value = '1';
        // this is to upload to kingdom adventures with Mr. Noodle and the bible doodle
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/nbzgqllakxni9';
    } else if (this.value == '8') {
        checkSelectedPodcast.value = '1';
        // this is to upload to revealed kids bedtime stories
        podcastUploadForm.action = 'https://sheetdb.io/api/v1/fo66a4dl8sjpt';
    } else {
        alert('an errror occured, please contact support.')
    }
};

podcastUploadForm.addEventListener("submit", e => {
    e.preventDefault();
    fetch(podcastUploadForm.action, {
        method: "POST",
        body: new FormData(podcastUploadForm),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'dashboard.html', '_blank';

    });
});