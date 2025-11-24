let podcastDataJSON;
let podcastName;
let podcastAbout;
let podcastAboutShort;
let podcastCoverPhoto;

let windowTitle = 'Revealed Radio Network | ';

let videosNumber = document.getElementById('videosNumber');

let coverPhoto = document.getElementById('coverPhoto');
let podcastTitle = document.getElementById('podcastTitle');
let podcastDiscription = document.getElementById('podcastDiscription');

let showAllDiscription = document.getElementById('showAllDiscription');

let discriptionRevealed = false;

// determins which podcast to load based on the URL

if (document.URL == 'https://revealedradionetwork.site/show.html#theoracle' || document.URL == 'https://revealedradionetwork.site/show.html#theoracle' || document.URL == 'http://127.0.0.1:5500/show.html#theoracle' || document.URL == 'http://127.0.0.1:5500/show.html#theoracle') {
    podcastDataJSON = 'https://sheetdb.io/api/v1/7u0bj75hc0n2e';
    podcastName = 'The Oracle';
    podcastAbout = `The Oracle with John R. Wilson III is a deep and thought-provoking podcast where Pastor John Wilson explores the essence, nature, and identity of God, the profound truths of His Kingdom, and the realities of life. With biblical insight and spiritual wisdom, each episode unveils the mysteries of Scripture while offering practical applications to help you walk in blessing, purpose, joy, and victory. Tune in as Pastor Wilson delivers revelation that will strengthen your faith and illuminate your path.`;
    podcastCoverPhoto = 'https://iili.io/F4dYsHb.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#therevealedreport' || document.URL == 'https://revealedradionetwork.site/show.html#therevealedreport' || document.URL == 'http://127.0.0.1:5500/show.html#therevealedreport' || document.URL == 'http://127.0.0.1:5500/show.html#therevealedreport') {
    podcastDataJSON = 'https://sheetdb.io/api/v1/ndxmp4t6jlvbp';
    podcastName = 'The Revealed Report';
    podcastAbout = `In a world filled with spin and deception, The Revealed Report cuts through the noise. Join John R. Wilson III for bold yet compassionate news analysis—hard-hitting, factual, and free of the foul language and corruption found in much of today’s media. With a mix of humor, insight, and godly wisdom, John dives deep into history, politics, world affairs, and culture, exposing lies and revealing truth from a biblical perspective. Stay informed. Stay grounded. Welcome to The Revealed Report.`;
    podcastCoverPhoto = 'https://iili.io/F4K3LoG.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#thefirmfoundation' || document.URL == 'https://revealedradionetwork.site/show.html#thefirmfoundation' || document.URL == 'http://127.0.0.1:5500/show.html#thefirmfoundation' || document.URL == 'http://127.0.0.1:5500/show.html#thefirmfoundation') {
    podcastDataJSON = 'https://sheetdb.io/api/v1/vr3um2xhhhmll';
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
    podcastDataJSON = 'https://sheetdb.io/api/v1/7mv60bvaa9bby';
    podcastName = 'Strength to Carry Through with Kayla Skinner';
    podcastAbout = `In a world filled with anxiety, adversity, and overwhelming pressure, it’s easy to feel like giving up. But what if the pain you’ve walked through was never meant to break you—but to build the strength to carry others?

Hosted by Kayla Skinner—a devoted wife, loving mother of three, and woman of Apostolic faith—this podcast speaks life to the weary soul. Through heartfelt testimony, biblical truth, and faith-affirming scientific insights, Kayla offers a voice of hope to women navigating life’s valleys. She knows the struggle because she’s lived it. And she knows the victory because God brought her through it.

Join her each week for uplifting conversations, transparent stories, and empowering encouragement that remind us: there is strength for the journey, grace for the climb, and joy in the carrying.

Because sometimes, just hearing “You’re not alone” is the strength someone needs to carry through.
`;
    podcastCoverPhoto = 'https://iili.io/F4KBRIt.jpg';

    loadEpisodes();
} else if (document.URL == 'https://revealedradionetwork.site/show.html#thebiblicalamericankids' || document.URL == 'https://revealedradionetwork.site/show.html#thebiblicalamericankids' || document.URL == 'http://127.0.0.1:5500/show.html#thebiblicalamericankids' || document.URL == 'http://127.0.0.1:5500/show.html#thebiblicalamericankids') {
    podcastDataJSON = 'https://sheetdb.io/api/v1/6dba9pjq7l8h0';
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
    podcastDataJSON = 'https://sheetdb.io/api/v1/2k45bdta4s76d';
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
    podcastDataJSON = 'https://sheetdb.io/api/v1/nbzgqllakxni9';
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
    podcastDataJSON = 'https://sheetdb.io/api/v1/fo66a4dl8sjpt';
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

showAllDiscription.addEventListener('click', toggleDiscription);

function toggleDiscription() {
    if (discriptionRevealed == true) {
        showAllDiscription.innerText = 'Show more';
        podcastDiscription.innerText = podcastAboutShort;
        discriptionRevealed = false;
    } else {
        showAllDiscription.innerText = 'Show less';
        podcastDiscription.innerText = podcastAbout;
        discriptionRevealed = true;
    }
}

function loadEpisodes() {

    document.title = windowTitle + podcastName;

    podcastTitle.innerText = podcastName;

    if (podcastAbout.length > 300) {
        podcastAboutShort = podcastAbout.substring(0, 300);
        showAllDiscription.style.display = 'flex';
        discriptionRevealed = false;

        podcastDiscription.innerText = podcastAboutShort;
    } else {
        podcastDiscription.innerText = podcastAbout;
    }

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

            let videoIDPartial1;
            switch (podcastName) {
                case 'The Revealed Report': videoIDPartial1 = '001'; break;
                case 'The Oracle': videoIDPartial1 = '002'; break;
                case 'The Firm Foundation': videoIDPartial1 = '003'; break;
                case 'Strength to Carry Through with Kayla Skinner': videoIDPartial1 = '004'; break;
                case 'The Biblical American Kid’s Podcast': videoIDPartial1 = '005'; break;
                case 'Get In The Game with Jesus': videoIDPartial1 = '006'; break;
                case 'Kingdom Adventures with Mr. Noodles the Bible Doodle': videoIDPartial1 = '007'; break;
                case 'Revealed Kids Bedtime Stories': videoIDPartial1 = '008'; break;
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

            newEpisodeSrc.href = 'watch.html?v=' + videoID;
            newEpisodeThumbnail.style.backgroundImage = 'url(' + podcastData[i].videoThumbnail + ')'
            newEpisodeTime.innerText = podcastData[i].videoTime;
            newEpisodeTitle.innerText = podcastData[i].videoTitle;
            newEpisodeDate.innerText = podcastData[i].videoDate;

            if (podcastData[i].videoTime == 'Premiere' || podcastData[i].videoTime == 'Live') {
                newEpisodeTime.style.backgroundColor = '#ff3a3a7c';
            }

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

            if (podcastData[i].videoTime == 'Premiere' || podcastData[i].videoTime == 'Live') {
                newEpisodeTime.style.backgroundColor = '#ff3a3a7c';
            }

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

// for the newest to oldest selector

window.onload = function () {
    crear_select();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


var li = new Array();
function crear_select() {
    var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
    var select_ = '';
    for (var e = 0; e < div_cont_select.length; e++) {
        div_cont_select[e].setAttribute('data-indx-select', e);
        div_cont_select[e].setAttribute('data-selec-open', 'false');
        var ul_cont = document.querySelectorAll("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
        select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];
        if (isMobileDevice()) {
            select_.addEventListener('change', function () {
                _select_option(select_.selectedIndex, e);
            });
        }
        var select_optiones = select_.options;
        document.querySelectorAll("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute('data-n-select', e);
        document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);
        for (var i = 0; i < select_optiones.length; i++) {
            li[i] = document.createElement('li');
            if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
                li[i].className = 'active';
                document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
            };
            li[i].setAttribute('data-index', i);
            li[i].setAttribute('data-selec-index', e);
            // funcion click al selecionar 
            li[i].addEventListener('click', function () { _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index')); });

            li[i].innerHTML = select_optiones[i].innerHTML;
            ul_cont[0].appendChild(li[i]);

        }; // Fin For select_optiones
    }; // fin for divs_cont_select
} // Fin Function 



var cont_slc = 0;
function open_select(idx) {
    var idx1 = idx.getAttribute('data-n-select');
    var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
    var hg = 0;
    var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
    var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];
    if (isMobileDevice()) {
        if (window.document.createEvent) { // All
            var evt = window.document.createEvent("MouseEvents");
            evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            slect_element_open.dispatchEvent(evt);
        } else if (slect_element_open.fireEvent) { // IE
            slect_element_open.fireEvent("onmousedown");
        } else {
            slect_element_open.click();
        }
    } else {


        for (var i = 0; i < ul_cont_li.length; i++) {
            hg += ul_cont_li[i].offsetHeight;
        };
        if (slect_open == 'false') {
            document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = hg + "px";
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.border = "2px solid #333";
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
        } else {
            document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.border = "none";
        }
    }

} // fin function open_select

function salir_select(indx) {
    var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.border = "none";
    document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
    document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
    document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
}


function _select_option(indx, selc) {
    if (isMobileDevice()) {
        selc = selc - 1;
    }
    var select_ = document.querySelectorAll("[data-indx-select='" + selc + "'] > select")[0];

    var li_s = document.querySelectorAll("[data-indx-select='" + selc + "'] .cont_select_int > li");
    var p_act = document.querySelectorAll("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
    var select_optiones = document.querySelectorAll("[data-indx-select='" + selc + "'] > select > option");
    for (var i = 0; i < li_s.length; i++) {
        if (li_s[i].className == 'active') {
            li_s[i].className = '';
        };
        li_s[indx].className = 'active';

    };
    select_optiones[indx].selected = true;
    select_.selectedIndex = indx;
    select_.onchange();
    salir_select(selc);
}