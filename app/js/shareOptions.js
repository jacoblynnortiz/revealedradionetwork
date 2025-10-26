let openShareOptionsBtn = document.getElementById('shareVideoBtn');
let closeShareOptionsBtn = document.getElementById('closeShareOptions');
let shareOptions = document.getElementById('shareOptions');

let shareOptionCopy = document.getElementById('shareOptionCopy');
let shareOptionFacebook = document.getElementById('shareOptionFacebook');
let shareOptionX = document.getElementById('shareOptionX');

openShareOptionsBtn.addEventListener('click', function () {
    shareOptions.style.display = 'flex';
});

closeShareOptionsBtn.addEventListener('click', function () {
    shareOptions.style.display = 'none';
});

// create share links

// facebook link share button
shareOptionFacebook.href = "https://www.facebook.com/sharer.php?u=" + document.URL;

// X link share button
shareOptionX.href = "https://x.com/intent/post?url=" + document.URL;

// copy link share button
shareOptionCopy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(document.URL);
    console.log('Text copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
});