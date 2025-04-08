let checkoutContainer = document.getElementById('checkoutContainer');

let openCheckout = document.getElementById('openCheckout');
let closeCheckout = document.getElementById('closeCheckout');

let completeOrder = document.getElementById('completeOrder');

// all the inputs for checkout

let currentDateInput = document.getElementById('currentDateInput');
let userCartInput = document.getElementById('userCartInput');

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

// sets order date to current date

let currentDate = new Date();

let mm = currentDate.getMonth() + 1;
let dd = currentDate.getDate();
let yyyy = currentDate.getFullYear();

currentDate = mm + '/' + dd + '/' + yyyy;

currentDateInput.value = currentDate;

userCartInput.value = localStorage.getItem('rrnCart');

// opens and closes the checkout menu

openCheckout.addEventListener('click', function () {
    checkoutContainer.style.right = '0px';
});

closeCheckout.addEventListener('click', function () {
    checkoutContainer.style.right = '-650px';
});

// this code will format an email with all the details and open the users email to send the order

let createOrderForm = document.getElementById('createOrderForm');

completeOrder.addEventListener('click', function (e) {
    e.preventDefault();

    fetch(createOrderForm.action, {
        method: "POST",
        body: new FormData(createOrderForm),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        localStorage.removeItem('rrnCart');
        window.location = 'cart.html', '_blank';

    });
});