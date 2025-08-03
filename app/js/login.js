let username = document.getElementById('usernameInput');
let password = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

let error = document.getElementById('error');

let usernameSuccess, passwordSuccess;

let ls = localStorage;

loginBtn.addEventListener('click', login);

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        login();
    } else {
        return;
    }
});

function login() {
    $.getJSON('https://sheetdb.io/api/v1/la8vm18y8v16z/', function (member_details) {
        for (let i = 0; i < member_details.length; i++) {
            if(username.value == member_details[i].username) {

                usernameSuccess = true;

                if(password.value == member_details[i].password) {

                    passwordSuccess = true;

                    ls.setItem('truthTabGraniteUsername', username.value);
                    ls.setItem('truthTabGranitePassword', password.value);
                    ls.setItem('truthTabGraniteProfilePicture', member_details[i].profilePicture);
                    ls.setItem('truthTabGraniteName', member_details[i].name);
                    ls.setItem('truthTabGraniteEmail', member_details[i].email);

                    window.location = 'dashboard.html';
                }

                break;
            }
        }

        if(usernameSuccess == null && passwordSuccess == null) {
            error.classList.add('error-active');
            error.innerText = 'the entered username or password is incorrect.';

            usernameSuccess = null;
            passwordSuccess = null;
        }
        
        if(usernameSuccess == true && passwordSuccess == null) {
            error.classList.add('error-active');
            error.innerText = 'the entered password is incorrect.';

            usernameSuccess = null;
            passwordSuccess = null;
        } else {
            console.log('there was an iternal error.')
        }
    });
}