let checkoutContainer = document.getElementById('checkoutContainer');

let openCheckout = document.getElementById('openCheckout');
let closeCheckout = document.getElementById('closeCheckout');

let completeOrder = document.getElementById('completeOrder');

// all the inputs for checkout

let email = document.getElementById('email');
let name = document.getElementById('name');
let address = document.getElementById('address');
let lotType = document.getElementById('lotType');

let city = document.getElementById('city');
let state = document.getElementById('state');
let zipcode = document.getElementById('zipcode');

let cardNumber = document.getElementById('cardNumber');
let cardExp = document.getElementById('cardExp');
let cardCVC = document.getElementById('cardCVC');
let cardName = document.getElementById('cardName');
let cardZipcode = document.getElementById('cardZipcode');

// opens and closes the checkout menu

openCheckout.addEventListener('click', function () {
    checkoutContainer.style.right = '0px';
});

closeCheckout.addEventListener('click', function () {
    checkoutContainer.style.right = '-650px';
});

// this code will format an email with all the details and open the users email to send the order

completeOrder.addEventListener('click', function (e) {
    e.preventDefault();

    let cartItemsString = ls.getItem('rrnCart');

    let userOrder = '{"email": ' + email.value + '},{"name": ' + name.value + '},{"address": ' + address.value + '},{"lotType": ' + lotType.value + '},{"city": ' + city.value + '},{"state": ' + state.value + '},{"zipcode": ' + zipcode.value + '},{"cardNumber": ' + cardNumber.value + '},{"cardExp": ' + cardExp.value + '},{"cardCVC": ' + cardCVC.value + '},{"cardName": ' + cardName.value + '},{"cardZipcode": ' + cardZipcode.value + '},{"userCart": ' + cartItemsString + '}'

    let params = {
        name: name.value,
        email: email.value,
        subject: 'RRN Shop | New order!',
        message: userOrder
    }

    emailjs.send('service_zw4jh1w', 'template_jakkjbd', params).then(localStorage.removeItem('rrnCart'));
});