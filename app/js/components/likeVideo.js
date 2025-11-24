let likeBtn = document.getElementById('likeBtn');
let videoLikesInput = document.getElementById('videoLikesInput');

let videoLiked = false;
let videoLikes = 0;

let videoLocalLikedVar;

videoLikesInput.value = videoLikes;

let ls = localStorage;

if (ls.getItem('RRNlikedVideos') == null) {
    ls.setItem('RRNlikedVideos', '');
}

if (ls.getItem('RRNlikedVideos') == '') {
    let rrnDefaultLikedVideos = [
        {
            "podcastChannelID": 0,
            "podcastVideoID": 0
        }
    ]

    let rrnDefaultLikedVideosString = JSON.stringify(rrnDefaultLikedVideos)

    ls.setItem("RRNlikedVideos", rrnDefaultLikedVideosString)
}

// Retrieving the string
let likedVideosString = ls.getItem("RRNlikedVideos")

// turns string back into JSON
let likedVideos = JSON.parse(likedVideosString);

for (let i = 0; i < likedVideos.length; i++) {
    if (likedVideos[i].podcastChannelID == podcastChannelID && likedVideos[i].podcastVideoID == podcastVideoID) {
        videoLiked = true;

        likeBtn.classList.toggle('video-liked');
        likeBtn.innerHTML = '<i class="fa-solid fa-heart"></i> ' + videoLikes;

        videoLocalLikedVar = i;
    }
}

$.getJSON(podcastDatabaseLink, function (podcastData) {
    for (let i = 0; i < podcastData.length; i++) {
        // code goes here

        videoLikesInput.value = podcastData[podcastVideoID].videoLikes;
        videoLikes = videoLikesInput.value;
    }
});

likeBtn.addEventListener('click', () => {
    if (videoLiked) {
        videoLiked = false;

        videoLikes = parseInt(videoLikes) - 1;
        likeBtn.classList.toggle('video-liked');

        videoLikesInput.value = videoLikes;
    } else {
        videoLiked = true;

        videoLikes = parseInt(videoLikes) + 1;
        likeBtn.innerHTML = '<i class="fa-solid fa-heart"></i> ' + videoLikes;
        likeBtn.classList.toggle('video-liked');

        videoLikesInput.value = videoLikes;
    }
});

setInterval(() => {
    videoLikes = parseInt(videoLikesInput.value);

    if (videoLiked) {
        likeBtn.innerHTML = '<i class="fa-solid fa-heart"></i> ' + videoLikes;
    } else {
        likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i> ' + videoLikes;
    }
}, 500);

// updates like counter for database

function likeVideo(event) {

    event.preventDefault();

    // first check if video is already liked if so do this and ignore the rest

    if (videoLiked == true) {

        // Retrieving the string
        let likedVideosString = ls.getItem("RRNlikedVideos")

        // turns string back into JSON
        let likedVideos = JSON.parse(likedVideosString);

        // update local liked videos

        likedVideos[videoLocalLikedVar].podcastChannelID = 9999;

        let rrnLikedVideosString = JSON.stringify(likedVideos);

        localStorage.setItem("RRNlikedVideos", rrnLikedVideosString);

        // update global like counter 

        fetch(podcastDatabaseLink + '/batch_update', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        "query": "uuid=" + podcastVideoID,
                        "videoLikes": parseInt(videoLikes) - 1,
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => window.location = document.URL, '_blank');

        return;
    }


    let newLikedVideo = { "podcastChannelID": podcastChannelID, "podcastVideoID": podcastVideoID }

    likedVideos.push(newLikedVideo);

    let rrnLikedVideosString = JSON.stringify(likedVideos);

    ls.setItem("RRNlikedVideos", rrnLikedVideosString);

    fetch(podcastDatabaseLink + '/batch_update', {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    "query": "uuid=" + podcastVideoID,
                    "videoLikes": parseInt(videoLikes) + 1,
                }
            ]
        })
    })
        .then((response) => response.json())
        .then((data) => window.location = document.URL, '_blank');

    // determins if video is already liked so if you press the liek button again it will instead unlike video

}