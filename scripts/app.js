
const episodesContainer = document.getElementById("episodesContainer");

let showMenu = document.getElementById('show-menu');
let menuClosed = true;

let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let link4 = document.getElementById('link4');
let link5 = document.getElementById('link5');

function slide() {
    if (window.matchMedia('screen and (max-width: 1100px)').matches) {
        if (menuClosed == true) {
            menuClosed = false;
            showMenu.checked = false;
        } else {
            menuClosed = true;
            showMenu.checked = false;
        }
    } else {
        console.log('mobile nav not active');
    }
}

link1.addEventListener('click', function () {
    slide();
});

link2.addEventListener('click', function () {
    slide();
});

link3.addEventListener('click', function () {
    slide();
});

link4.addEventListener('click', function () {
    slide();
});

link5.addEventListener('click', function () {
    slide();
});

// FETCHES JSON FROM DATABASE 

$.getJSON('https://api.npoint.io/f61bc06b8b82159668ee', function (podcast_episodes) {

    let latestEpisodeContainer = document.getElementById("latestEpisodeContainer");
    latestEpisodeContainer.innerHTML = podcast_episodes[0].episode;
    for (let i = 0; i < 5; i++) {
        // creates new sermon post
        let newEpisodeContainer = document.createElement("div");
        let newEpisodeInfo = document.createElement("div");
        let newEpisodeTitle = document.createElement("h3");
        let newEpisodeDiscription = document.createElement("p");

        newEpisodeContainer.classList.add("episode");
        newEpisodeContainer.setAttribute("id", i);
        newEpisodeContainer.innerHTML = podcast_episodes[i].episode;

        newEpisodeTitle.innerText = podcast_episodes[i].title;

        newEpisodeDiscription.innerText = podcast_episodes[i].discription;

        // adds episode elements to episodes container
        episodesContainer.appendChild(newEpisodeContainer);
        newEpisodeContainer.appendChild(newEpisodeInfo);
        newEpisodeInfo.appendChild(newEpisodeTitle);
        newEpisodeInfo.appendChild(newEpisodeDiscription);
    }
});
