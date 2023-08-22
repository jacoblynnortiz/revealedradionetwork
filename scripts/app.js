
const episodesContainer = document.getElementById("episodesContainer");

// FETCHES JSON FROM DATABASE 

$.getJSON('https://api.npoint.io/f61bc06b8b82159668ee', function (podcast_episodes) {

    let latestEpisodeContainer = document.getElementById("latestEpisodeContainer");
    latestEpisodeContainer.innerHTML = podcast_episodes[0].episode;
    for (let i = 0; i < 5; i++) {
        // creates new sermon post
        let newEpisodeContainer = document.createElement("div");;

        newEpisodeContainer.classList.add("episode");
        newEpisodeContainer.setAttribute("id", i);
        newEpisodeContainer.innerHTML = podcast_episodes[i].episode;

        // adds episode elements to episodes container
        episodesContainer.appendChild(newEpisodeContainer);
        console.log(podcast_episodes)
    }
});

function mail() {

	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
	var message = document.getElementById('message').value;

	window.open('mailto:theunitysharp@gmail.com?subject=' + "Name: " + name + ", " + "Email: " + email + ", " + "Phone: " + phone + ", " + ' messaged from Revealed Radio Network website!&body=' + message);
}