let ls = localStorage;

let usernameSuccess1, passwordSuccess1;

let profilePicture = document.getElementById('profilePicture');

let profilePictureMenu = document.getElementById('profilePictureMenu');
let userFullName = document.getElementById('userFullName');
let userEmail = document.getElementById('userEmail');

// detects if user is saved as an admin or not for security

if (ls.getItem("rrnAdminUsername") == null) {
    window.location = 'administrative-login.html';
} else {
    profilePicture.style.backgroundImage = 'url(' + ls.getItem('rrnAdminProfilePicture') + ')';

    profilePictureMenu.style.backgroundImage = 'url(' + ls.getItem('rrnAdminProfilePicture') + ')';
    userFullName.innerText = ls.getItem('rrnAdminFullName');
    userEmail.innerText = ls.getItem('rrnAdminEmail');
}

// checks if username and password that they're logged in with still matches account they're logged in with for
// security, if it doesnt match it will say session expired and give one option to go to login page to re login
$.getJSON('https://api.npoint.io/a9f669540d60c1696f42', function (admin_details) {
    // looks through accounts database looking for match
    for (let i = 0; i < admin_details.length; i++) {
        let locateAccount = admin_details[i].username;
        let getAccountPassword = admin_details[i].password;
        // checkes if username still matches
        if (ls.getItem("rrnAdminUsername") == locateAccount) {
            usernameSuccess1 = true;

            // if username matches it will then check if that password also still matches
            if (ls.getItem("rrnAdminPassword") == getAccountPassword) {
                passwordSuccess1 = true;
            }
        }
    }
    // shows a session expired message to user if username or password doesnt match
    if (usernameSuccess1 == null || passwordSuccess1 == null) {
        sessionExpired.style.display = 'flex';
    }
});

