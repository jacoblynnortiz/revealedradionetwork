let sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    emailjs.send('service_zw4jh1w', 'template_i2innjc', params).then(alert('message sent.'));
});