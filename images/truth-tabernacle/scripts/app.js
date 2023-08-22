// makes navigation menu toggle between desktop and mobile menu

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// makes contact section pull the info entered and mail to the church email

function mail() {

	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	var message = document.getElementById('message').value;

	window.open('mailto:info@truthtabgranite.com?subject=' + name + ' messaged from Truth Tabernacle website!&body=' + message);
}

// FETCHES JSON FROM DATABASE

if(document.title == 'Truth Tabernacle of Granite City') {
	$.getJSON('https://api.npoint.io/0f9d878c6c868eda25da', function(sermon_posts) {
	let latestSermon = document.getElementById('latestSermon');
	let latestSermonHeader = document.createElement('h2');

	latestSermonHeader.innerText = "Watch this week's sermons";

	// this looks through the sermon posts database and gets the object in the array that is on top
	// (which is the latest sermon)

    for (let i = 0; i <= 0; i++) {
        latestSermon.innerHTML = sermon_posts[i++].sermon_src + sermon_posts[i++].sermon_src + sermon_posts[i++].sermon_src;
    }
});
}