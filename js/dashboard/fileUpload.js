// drap drop feature for cover photos "Truth Dispatch"

let dropZoneTruthDispatchTruthDispatch = document.getElementById('dropZoneTruthDispatch');
let dragDropTruthDispatchContent = document.getElementById('dragDropTruthDispatchContent');
let dragDropTruthDispatch = document.getElementById('dragDropTruthDispatch');

let coverPhotoInput = document.getElementById('coverPhotoInput');

dragDropTruthDispatch.addEventListener("change", uploadImage);

function uploadImage(e) {
    let imgLink = URL.createObjectURL(dragDropTruthDispatch.files[0]);

    coverPhotoInput.value = imgLink;

    dropZoneTruthDispatch.style.background = 'url("' + imgLink + '")';
    dropZoneTruthDispatch.style.backgroundSize = 'cover';
    dropZoneTruthDispatch.style.backgroundPosition = 'center'
    dropZoneTruthDispatch.style.backgroundRepeat = 'no-repeat';

    dragDropTruthDispatchContent.style.display = 'none';

    // host image and set the link the coverPhoto value
}

dropZoneTruthDispatch.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropZoneTruthDispatch.addEventListener("drop", function (e) {
    e.preventDefault();

    dragDropTruthDispatch.files = e.dataTransfer.files;
    uploadImage();
});

