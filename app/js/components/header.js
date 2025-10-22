// listens for if window is scrolled past Y level 0

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $(".header").addClass("header-sticky");
    } else {
        $(".header").removeClass("header-sticky");
    }
});

// generates header on page for a main page or about page

if (header.dataset.pagetype == 'main') {
    header.innerHTML = `
    <header class="header">
        <div class="header-sections">
            <div class="header-section">
                <div class="logo">
                    <a href="index.html"><img src="res/images/logo-header.png" alt="#"></a>
                </div>
            </div>
            <div class="header-section">
                <nav>
                    <input type="checkbox" id="show-menu">
                    <ul class="links">
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">About<span class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-about">
                            <label for="show-about">About</label>
                            <ul>
                                <li><a href="about_pages/about.html">About Us</a></li>
                                <li><a href="about_pages/meetthehost.html">Meet the Host</a></li>
                                <li><a href="about_pages/ourstaff.html">Our Staff</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Shop<span class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-shop">
                            <label for="show-shop">Shop</label>
                            <ul>
                                <li><a href="shop.html#all">All</a></li>
                                <li><a href="shop.html#books">Books</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Shows<span class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-shows">
                            <label for="show-shows">Shows</label>
                            <ul>
                                <li><a href="show.html#therevealedreport">The Revealed Report</a></li>
                                <li><a href="show.html#theoracle">The Oracle</a></li>
                                <li><a href="show.html#thefirmfoundation">The Firm Foundation</a></li>
                                <li><a href="show.html#strengthtocarrythroughwithkaylaskinner">Strength to Carry Through with Kayla Skinner</a></li>
                                <li><a href="show.html#thebiblicalamericankids">The Biblical American Kids Podcast</a></li>
                                <li><a href="show.html#getinthegamewithjesus">Get In The Game with Jesus</a></li>
                                <li><a href="show.html#kingdomadventureswithmrnoodlesthebibledoodle">Kingdom Adventures with Mr. Noodles the Bible Doodle</a></li>
                                <li><a href="show.html#revealedkidsbedtimestories">Revealed Kids Bedtime Stories</a></li>
                            </ul>
                        </li>
                        <li><a href="revealeddispatch.html">Revealed Dispatch</a></li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Online Courses<span class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-courses">
                            <label for="show-courses">Online Courses</label>
                            <ul>
                                <li><a href="courses/revealedacademy.html">Revealed Academy</a></li>
                                <li><a href="courses/mitt.html">M.I.T.T.</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Resources<span class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-resources">
                            <label for="show-resources">Resources</label>
                            <ul>
                                <li><a href="resources.html">Livestreams</a></li>
                                <li><a href="resources.html">Documentaries</a></li>
                                <li><a href="resources.html">Library</a></li>
                                <li><a href="resources.html">Kingdom Strategies</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
                </nav>
            </div>
            <div class="header-section-logo-center">
                <div class="logo">
                    <a href="index.html"><img src="res/images/logo-header.png" alt="#"></a>
                </div>
            </div>
            <div class="header-section">
                <a href="cart.html" style="position: relative;"><i class="fa-solid fa-cart-shopping"></i><span id="cartItems"></span></a>
            </div>
        </div>
    </header>
    `
} else if (header.dataset.pagetype == 'about') {
    header.innerHTML = `
    <header class="header">
        <div class="header-sections">
            <div class="header-section">
                <div class="logo">
                    <a href="../index.html"><img src="../res/images/logo-header.png" alt="#"></a>
                </div>
            </div>
            <div class="header-section">
                <nav>
                    <input type="checkbox" id="show-menu">
                    <ul class="links">
                        <li><a href="../index.html">Home</a></li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">About<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-about">
                            <label for="show-about">About</label>
                            <ul>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="meetthehost.html">Meet the Host</a></li>
                                <li><a href="ourstaff.html">Our Staff</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Shop<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-shop">
                            <label for="show-shop">Shop</label>
                            <ul>
                                <li><a href="../shop.html#all">All</a></li>
                                <li><a href="../shop.html#books">Books</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Shows<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-shows">
                            <label for="show-shows">Shows</label>
                            <ul>
                                <li><a href="../show.html#therevealedreport">The Revealed Report</a></li>
                                <li><a href="../show.html#theoracle">The Oracle</a></li>
                                <li><a href="../show.html#thefirmfoundation">The Firm Foundation</a></li>
                                <li><a href="../show.html#strengthtocarrythroughwithkaylaskinner">Strength to Carry Through with Kayla Skinner</a></li>
                                <li><a href="../show.html#thebiblicalamericankids">The Biblical American Kids Podcast</a></li>
                                <li><a href="../show.html#getinthegamewithjesus">Get In The Game with Jesus</a></li>
                                <li><a href="../show.html#kingdomadventureswithmrnoodlesthebibledoodle">Kingdom Adventures with Mr. Noodles the Bible Doodle</a></li>
                                <li><a href="../show.html#revealedkidsbedtimestories">Revealed Kids Bedtime Stories</a></li>
                            </ul>
                        </li>
                        <li><a href="../revealeddispatch.html">Revealed Dispatch</a></li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Online Courses<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-courses">
                            <label for="show-courses">Online Courses</label>
                            <ul>
                                <li><a href="../courses/revealedacademy.html">Revealed Academy</a></li>
                                <li><a href="../courses/mitt.html">M.I.T.T.</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Resources<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-resources">
                            <label for="show-resources">Resources</label>
                            <ul>
                                <li><a href="../resources.html">Livestreams</a></li>
                                <li><a href="../resources.html">Documentaries</a></li>
                                <li><a href="../resources.html">Library</a></li>
                                <li><a href="../resources.html">Kingdom Strategies</a></li>
                            </ul>
                        </li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                    <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
                </nav>
            </div>
            <div class="header-section-logo-center">
                <div class="logo">
                    <a href="../index.html"><img src="../res/images/logo-header.png" alt="#"></a>
                </div>
            </div>
            <div class="header-section">
                <a href="../cart.html" style="position: relative;"><i class="fa-solid fa-cart-shopping"></i><span
                        id="cartItems"></span></a>
            </div>
        </div>
    </header>
    `
} else if (header.dataset.pagetype == 'courses') {
    header.innerHTML = `
    <header class="header">
        <div class="header-sections">
            <div class="header-section">
                <div class="logo">
                    <a href="../index.html"><img src="../res/images/logo-header.png" alt="#"></a>
                </div>
            </div>
            <div class="header-section">
                <nav>
                    <input type="checkbox" id="show-menu">
                    <ul class="links">
                        <li><a href="../index.html">Home</a></li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">About<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-about">
                            <label for="show-about">About</label>
                            <ul>
                                <li><a href="../about_pages/about.html">About Us</a></li>
                                <li><a href="../about_pages/meetthehost.html">Meet the Host</a></li>
                                <li><a href="../about_pages/ourstaff.html">Our Staff</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Shop<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-shop">
                            <label for="show-shop">Shop</label>
                            <ul>
                                <li><a href="../shop.html#all">All</a></li>
                                <li><a href="../shop.html#books">Books</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Shows<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-shows">
                            <label for="show-shows">Shows</label>
                            <ul>
                                <li><a href="../show.html#therevealedreport">The Revealed Report</a></li>
                                <li><a href="../show.html#theoracle">The Oracle</a></li>
                                <li><a href="../show.html#thefirmfoundation">The Firm Foundation</a></li>
                                <li><a href="../show.html#strengthtocarrythroughwithkaylaskinner">Strength to Carry Through with Kayla Skinner</a></li>
                                <li><a href="../show.html#thebiblicalamericankids">The Biblical American Kids Podcast</a></li>
                                <li><a href="../show.html#getinthegamewithjesus">Get In The Game with Jesus</a></li>
                                <li><a href="../show.html#kingdomadventureswithmrnoodlesthebibledoodle">Kingdom Adventures with Mr. Noodles the Bible Doodle</a></li>
                                <li><a href="../show.html#revealedkidsbedtimestories">Revealed Kids Bedtime Stories</a></li>
                            </ul>
                        </li>
                        <li><a href="../revealeddispatch.html">Revealed Dispatch</a></li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Online Courses<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-courses">
                            <label for="show-courses">Online Courses</label>
                            <ul>
                                <li><a href="revealedacademy.html">Revealed Academy</a></li>
                                <li><a href="mitt.html">M.I.T.T.</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="desktop-link">Resources<span
                                    class="dropdown-seperator"></span><i class="fa-solid fa-angle-down"></i></a>
                            <input type="checkbox" id="show-resources">
                            <label for="show-resources">Resources</label>
                            <ul>
                                <li><a href="../resources.html">Livestreams</a></li>
                                <li><a href="../resources.html">Documentaries</a></li>
                                <li><a href="../resources.html">Library</a></li>
                                <li><a href="../resources.html">Kingdom Strategies</a></li>
                            </ul>
                        </li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                    <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
                </nav>
            </div>
            <div class="header-section-logo-center">
                <div class="logo">
                    <a href="../index.html"><img src="../res/images/logo-header.png" alt="#"></a>
                </div>
            </div>
            <div class="header-section">
                <a href="../cart.html" style="position: relative;"><i class="fa-solid fa-cart-shopping"></i><span
                        id="cartItems"></span></a>
            </div>
        </div>
    </header>
    `
}