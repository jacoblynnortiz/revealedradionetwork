let footer = document.getElementById('footer');

// generates header on page for a main page or about page

if (footer.dataset.pagetype == 'main') {
    footer.innerHTML = `
        <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-col">
                    <div class="footer-logo">
                        <a href="index.html"><img src="res/images/logo-header.png" alt="#"></a>
                    </div>
                    <p>Follow the Truth. Join the Movement.
📲<br>Connect with us on Instagram, Facebook, X, YouTube, Rumble, TikTok, and more.</p>
                    <div class="rrn-socials">
                        <a class="socials-link" href="https://www.facebook.com/RevealedRadioNetwork"><i class="fa-brands fa-facebook"></i></a>
                        <a class="socials-link" href="https://www.instagram.com/revealedradionetwork/"><i class="fa-brands fa-instagram"></i></a>
                        <a class="socials-link" href="https://www.youtube.com/@revealedradionetwork676"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>About RRN</h3>
                    <ul>
                        <li><a href="about_pages/about.html">About Us</a></li>
                        <li><a href="about_pages/meetthehost.html">Meet the Host</a></li>
                        <li><a href="about_pages/ourstaff.html">Our Staff</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Shows</h3>
                    <ul>
                        <li><a href="show.html#theoracle">The Oracle</a></li>
                        <li><a href="show.html#therevealedreport">The Revealed Report</a></li>
                        <li><a href="show.html#thebiblicalamericankids">The Biblical American Kids Podcast</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Suggestions</h3>
                    <ul>
                        <li><a href="truthdispatch.html">Truth Dispatch</a></li>
                        <li><a href="courses/truthacademy.html">Truth Academy</a></li>
                        <li><a href="shop.html#all">Shop</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <h3 id="copyrightHeader">Copyright © year Company Name</h3>
                <div class="legal-links">
                    <a href="legal/tos.html">Terms of Service</a>
                    <a href="legal/privacypolicy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
    `
} else if (footer.dataset.pagetype == 'about') {
    footer.innerHTML = `
        <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-col">
                    <div class="footer-logo">
                        <a href="../index.html"><img src="../res/images/logo-header.png" alt="#"></a>
                    </div>
                    <p>Follow the Truth. Join the Movement.
📲<br>Connect with us on Instagram, Facebook, X, YouTube, Rumble, TikTok, and more.</p>
                    <div class="rrn-socials">
                        <a class="socials-link" href="https://www.facebook.com/RevealedRadioNetwork"><i
                                class="fa-brands fa-facebook"></i></a>
                        <a class="socials-link" href="https://www.instagram.com/revealedradionetwork/"><i
                                class="fa-brands fa-instagram"></i></a>
                        <a class="socials-link" href="https://www.youtube.com/@revealedradionetwork676"><i
                                class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>About RRN</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="meetthehost.html">Meet the Host</a></li>
                        <li><a href="ourstaff.html">Our Staff</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Shows</h3>
                    <ul>
                        <li><a href="../show.html#theoracle">The Oracle</a></li>
                        <li><a href="../show.html#therevealedreport">The Revealed Report</a></li>
                        <li><a href="../show.html#thebiblicalamericankids">The Biblical American Kids Podcast</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Suggestions</h3>
                    <ul>
                        <li><a href="../truthdispatch.html">Truth Dispatch</a></li>
                        <li><a href="../courses/truthacademy.html">Truth Academy</a></li>
                        <li><a href="../shop.html#all">Shop</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <h3 id="copyrightHeader">Copyright © year Company Name</h3>
                <div class="legal-links">
                    <a href="../legal/tos.html">Terms of Service</a>
                    <a href="../legal/privacypolicy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
    `
}