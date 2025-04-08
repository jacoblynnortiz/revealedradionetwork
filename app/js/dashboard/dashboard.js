let ls = localStorage;

let usernameSuccess1, passwordSuccess1;

let profilePicture = document.getElementById('profilePicture');

let profilePictureMenu = document.getElementById('profilePictureMenu');
let userFullName = document.getElementById('userFullName');
let userEmail = document.getElementById('userEmail');

let welcomeUser = document.getElementById('welcomeUser');

// detects if user is saved as an admin or not for security

if (ls.getItem("truthTabGraniteUsername") == null) {
    window.location = 'administrative-login.html';
} else {
    profilePicture.style.backgroundImage = 'url(' + ls.getItem('truthTabGranitePassword') + ')';

    profilePicture.style.backgroundImage = 'url(' + ls.getItem('truthTabGraniteProfilePicture') + ')';
    profilePictureMenu.style.backgroundImage = 'url(' + ls.getItem('truthTabGraniteProfilePicture') + ')';
    userFullName.innerText = ls.getItem('truthTabGraniteName');
    userEmail.innerText = ls.getItem('truthTabGraniteEmail');

    welcomeUser.innerText = ls.getItem('truthTabGraniteName') + "!";
}

// checks if username and password that they're logged in with still matches account they're logged in with for
// security, if it doesnt match it will say session expired and give one option to go to login page to re login
$.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z', function (admin_details) {
    // looks through accounts database looking for match
    for (let i = 0; i < admin_details.length; i++) {
        let locateAccount = admin_details[i].username;
        let getAccountPassword = admin_details[i].password;
        // checkes if username still matches
        if (ls.getItem("truthTabGraniteUsername") == locateAccount) {
            usernameSuccess1 = true;

            // if username matches it will then check if that password also still matches
            if (ls.getItem("truthTabGranitePassword") == getAccountPassword) {
                passwordSuccess1 = true;

                let adminStatus = admin_details[i].adminStatus;

                // checks to see if changes were made to the database on admin status in case
                // computer is still saved as an admin

                if (adminStatus == 0) {
                    ls.setItem("truthTabGraniteAdmin", 0);
                    window.location = "administrative-login.html";
                } else if (adminStatus == 1) {
                    ls.setItem("truthTabGraniteAdmin", 1);
                }
            }
        }
    }
    // shows a session expired message to user if username or password doesnt match
    if (usernameSuccess1 == null || passwordSuccess1 == null) {
        sessionExpired.style.display = 'flex';
    }
});

