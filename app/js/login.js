let username = document.getElementById('usernameInput');
let password = document.getElementById('passwordInput');

let loginBtn = document.getElementById('loginBtn');

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
    $.getJSON('https://api.npoint.io/a9f669540d60c1696f42', function (admin_details) {
        for (let i = 0; i < admin_details.length; i++) {
            if(username.value == admin_details[i].username) {
                if(password.value == admin_details[i].password) {
                    ls.setItem('rrnAdminUsername', username.value);
                    ls.setItem('rrnAdminPassword', password.value);
                    ls.setItem('rrnAdminFullName', admin_details[i].fullName);
                    ls.setItem('rrnAdminEmail', admin_details[i].email);
                    ls.setItem('rrnAdminProfilePicture', admin_details[i].profilePicture);

                    window.location = 'adminPanel.html'
                } else {
                    let error = document.getElementById('error');

                    error.classList.add('error-active');
                    error.innerText = 'the entered password is incorrect.';
                }
            } else {
                let error = document.getElementById('error');

                error.classList.add('error-active');
                error.innerText = 'the entered username or password is incorrect.';
            }
        }
    });
}