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
    podcastCoverPhoto = 'https://iili.io/F4dYsHb.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#therevealedreport' || document.URL == 'https://revealedradionetwork.site/show.html#therevealedreport' || document.URL == 'http://127.0.0.1:5500/show.html#therevealedreport' || document.URL == 'http://127.0.0.1:5500/show.html#therevealedreport') {
    podcastDataJSON = 'https://api.npoint.io/f0c6937151ed27045c14';
    podcastName = 'The Revealed Report';
    podcastAbout = `In a world filled with spin and deception, The Revealed Report cuts through the noise. Join John R. Wilson III for bold yet compassionate news analysis—hard-hitting, factual, and free of the foul language and corruption found in much of today’s media. With a mix of humor, insight, and godly wisdom, John dives deep into history, politics, world affairs, and culture, exposing lies and revealing truth from a biblical perspective. Stay informed. Stay grounded. Welcome to The Revealed Report.`;
    podcastCoverPhoto = 'https://iili.io/F4K3LoG.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#thefirmfoundation' || document.URL == 'https://revealedradionetwork.site/show.html#thefirmfoundation' || document.URL == 'http://127.0.0.1:5500/show.html#thefirmfoundation' || document.URL == 'http://127.0.0.1:5500/show.html#thefirmfoundation') {
    podcastDataJSON = 'https://api.npoint.io/b93c5a3417476343452f';
    podcastName = 'The Firm Foundation';
    podcastAbout = `Built on the Word. Anchored in Truth. Strengthened for Life.

In a time when everything that can be shaken is being shaken, The Firm Foundation offers a steady voice of Truth, hope, and biblical strength. Hosted by Austin Skinner, this podcast is dedicated to rightly dividing the Word, upholding godly values, and strengthening the hearts of God’s people.

Rooted in Matthew 16:18 and Acts 4:11, each episode offers:

    •    Sound Apostolic doctrine and theology

    •    Biblical answers for real-life challenges

    •    Encouragement for families, marriages, and men of God

    •    Bold Truth in the face of cultural confusion

    •    Messages of hope, healing, and spiritual renewal

Whether you’re a believer seeking direction, a parent navigating today’s culture, or a disciple hungry for more, The Firm Foundation equips you to stand tall, live right, and hold fast.

Because when the storms come—and they will—only lives built on the Rock will remain.

Weekly episodes on the Revealed Radio Network—strength for your walk, and hope for your soul.`;
    podcastCoverPhoto = 'https://iili.io/F4Kq70x.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#strengthtocarrythroughwithkaylaskinner' || document.URL == 'https://revealedradionetwork.site/show.html#strengthtocarrythroughwithkaylaskinner' || document.URL == 'http://127.0.0.1:5500/show.html#strengthtocarrythroughwithkaylaskinner' || document.URL == 'http://127.0.0.1:5500/show.html#strengthtocarrythroughwithkaylaskinner') {
    podcastDataJSON = 'https://api.npoint.io/2429b7e1d67fa4b33e4e';
    podcastName = 'Strength to Carry Through with Kayla Skinner';
    podcastAbout = `In a world filled with anxiety, adversity, and overwhelming pressure, it’s easy to feel like giving up. But what if the pain you’ve walked through was never meant to break you—but to build the strength to carry others?

Hosted by Kayla Skinner—a devoted wife, loving mother of three, and woman of Apostolic faith—this podcast speaks life to the weary soul. Through heartfelt testimony, biblical truth, and faith-affirming scientific insights, Kayla offers a voice of hope to women navigating life’s valleys. She knows the struggle because she’s lived it. And she knows the victory because God brought her through it.

Join her each week for uplifting conversations, transparent stories, and empowering encouragement that remind us: there is strength for the journey, grace for the climb, and joy in the carrying.

Because sometimes, just hearing “You’re not alone” is the strength someone needs to carry through.
`;
    podcastCoverPhoto = 'https://iili.io/F4KBRIt.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#thebiblicalamericankids' || document.URL == 'https://revealedradionetwork.site/show.html#thebiblicalamericankids' || document.URL == 'http://127.0.0.1:5500/show.html#thebiblicalamericankids' || document.URL == 'http://127.0.0.1:5500/show.html#thebiblicalamericankids') {
    podcastDataJSON = 'https://api.npoint.io/80ca41790c5e141aca9b';
    podcastName = 'The Biblical American Kid’s Podcast';
    podcastAbout = `Faith. Freedom. Fun. From a Kid’s Point of View!

The Biblical American Kid’s Podcast is hosted by Camden J. Wilson, a young voice with a big heart for Jesus, the Bible, and the United States of America. This podcast is created by a kid, for kids—and it’s packed with truth, courage, and character.

Each short, action-packed episode includes:

	•	Bible stories and lessons with simple, powerful truths

	•	American history and heroes from a biblical and patriotic view

	•	Fun facts, memory verses, and encouraging challenges for kids

	•	Faith-based values every family can stand on

Perfect for Christian families, homeschoolers, Sunday school groups, or car rides, Camden helps kids learn how to be brave, kind, and biblical patriots in today’s world—just like the heroes of faith and freedom who came before us.

Tune in each week on the Revealed Radio Network, and let your kids discover how they, too, can be Biblical American Kids who stand for truth!
`;
    podcastCoverPhoto = 'https://iili.io/F4Kn0e2.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#getinthegamewithjesus' || document.URL == 'https://revealedradionetwork.site/show.html#getinthegamewithjesus' || document.URL == 'http://127.0.0.1:5500/show.html#getinthegamewithjesus' || document.URL == 'http://127.0.0.1:5500/show.html#getinthegamewithjesus') {
    podcastDataJSON = 'https://api.npoint.io/bbf99a242218ee3b72d9';
    podcastName = 'Get In The Game with Jesus';
    podcastAbout = `It’s time for kids to stop sitting on the sidelines—and start living for Jesus!

Get In The Game with Jesus is a fun, faith-filled podcast hosted by 11-year-old Levi Wilson, who’s passionate about God, the Bible, history, and America. Each episode, Levi encourages other kids (and their parents!) to stand up for truth, live boldly for Jesus, and love the country God has blessed us with.

From exciting Bible lessons to real history, strong values, and practical ways to follow Jesus every day, this podcast is perfect for:

	•	Kids who want to live for God

	•	Families looking for wholesome, Christ-centered content

	•	Parents who want to raise bold, faith-driven leaders

Join Levi every week on the Revealed Radio Network as he helps kids everywhere learn how to love Jesus, love truth, and get in the game!
`;
    podcastCoverPhoto = 'https://iili.io/F4Kzo5x.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#kingdomadventureswithmrnoodlesthebibledoodle' || document.URL == 'https://revealedradionetwork.site/show.html#kingdomadventureswithmrnoodlesthebibledoodle' || document.URL == 'http://127.0.0.1:5500/show.html#kingdomadventureswithmrnoodlesthebibledoodle' || document.URL == 'http://127.0.0.1:5500/show.html#kingdomadventureswithmrnoodlesthebibledoodle') {
    podcastDataJSON = 'https://api.npoint.io/7a2aed81e07f4538dd5c';
    podcastName = 'Kingdom Adventures with Mr. Noodles the Bible Doodle';
    podcastAbout = `Where Giggles Meet the Gospel and Kids Discover the Kingdom!

Welcome to Kingdom Adventures with Mr. Noodles the Bible Doodle—the fun, faith-packed podcast where silly meets serious and kids explore God’s big Kingdom one adventure at a time!

Hosted by everyone’s favorite fuzzy-headed, big-hearted friend, Mr. Noodles, this joyful podcast helps young listeners understand who Jesus is, what the Bible teaches, and how they can live for God every day—all while laughing, learning, and maybe even doodling along!

Each episode includes:

	•	📖 Engaging Bible stories told with excitement, sound effects, and simple life application

	•	🎨 Mr. Noodles’ Doodle Time with creative prompts and fun imagination moments

	•	🎶 Sing-along songs, memory verses, and joyful truths

	•	🤪 Goofy lessons with a serious message your kids won’t forget

	•	💛 Big topics made little heart-friendly in an Apostolic, kid-safe format

Whether at home, in the car, or during class time, Mr. Noodles is here to help your children hide God’s Word in their hearts, walk in kindness, and live as little lights for Jesus.

Because even the youngest hearts can be part of the Kingdom of God—and it’s never too early to fall in love with truth.

Let’s doodle through the Bible together!
`;
    podcastCoverPhoto = 'https://iili.io/F4K1yDF.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#revealedkidsbedtimestories' || document.URL == 'https://revealedradionetwork.site/show.html#revealedkidsbedtimestories' || document.URL == 'http://127.0.0.1:5500/show.html#revealedkidsbedtimestories' || document.URL == 'http://127.0.0.1:5500/show.html#revealedkidsbedtimestories') {
    podcastDataJSON = 'https://api.npoint.io/a64562f89e713b680ec2';
    podcastName = 'Revealed Kids Bedtime Stories';
    podcastAbout = `Snuggle in. Wind down. Grow in God’s Word.

Every Saturday night at 7 PM CST, Revealed Kids Bedtime Stories brings gentle, faith-filled storytelling straight into your home. This peaceful podcast helps children rest easy with their hearts full of truth, their minds filled with wonder, and their dreams anchored in the Word of God.

Each episode features:

	•	📖 A short, original story written from a biblical and Apostolic perspective

	•	💡 Faith-based lessons and heartwarming themes kids can understand

	•	🎙️ Soothing narration perfect for winding down after a busy week

	•	🛏️ A calm and comforting atmosphere that gently prepares young listeners for rest

All stories featured on the podcast are also available to purchase from the Revealed Radio Network Shop, so families can read them again and again at home.

Whether it’s Mr. Noodles, the TruthForce, or other beloved characters, your kids will drift off with Scripture in their spirit and joy in their hearts.

📆 New story every Saturday night at 7 PM CST

🛒 Books available now at revealedradionetwork.com/shop

Because every child deserves to fall asleep wrapped in truth.

🎒 Get the books. Take the adventure.

📚 At the Revealed Radio Network Shop!
`;
    podcastCoverPhoto = 'https://iili.io/F4KMG8Q.jpg';

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

        if (podcastData.length == 0) {
            episodesContainerNewest.innerHTML = '<span class="no-posts-yet">No Posts Yet</span>';
            episodesContainerOldest.innerHTML = '<span class="no-posts-yet">No Posts Yet</span>';
        }

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