let authorPhotoInput = document.getElementById('authorPhotoInput');
let writtenByInput = document.getElementById('writtenByInput');
let publishedOnInput = document.getElementById('publishedOnInput');

let currentDate = new Date();

let mm = currentDate.getMonth() + 1;
let dd = currentDate.getDate();
let yyyy = currentDate.getFullYear();

currentDate = mm + '/' + dd + '/' + yyyy;

authorPhotoInput.value = ls.rrnAdminProfilePicture;
writtenByInput.value = ls.rrnAdminFullName;
publishedOnInput.value = currentDate;

let uploadTruthDispatch = document.getElementById('uploadTruthDispatch');

uploadTruthDispatch.addEventListener("submit", e => {
    e.preventDefault();
    fetch(uploadTruthDispatch.action, {
        method: "POST",
        body: new FormData(uploadTruthDispatch),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.location = 'dashboard.html', '_blank';

    });
});