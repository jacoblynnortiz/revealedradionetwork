let directory;

// detect if the page is a main page or subfolder page

let header = document.getElementById('header');

if(header.dataset.pagetype == 'main') {
    directory = '';

    runMain();
} else {
    directory = '../';

    runMain();
}

function runMain() {
    if(localStorage.getItem('rrnCart') == null) {
        localStorage.setItem('rrnCart', '');
    }

    $.getJSON(directory + 'app/js/metaInformation.json', function (metaInfomration) {
        let copyrightHeader = document.getElementById('copyrightHeader');
    
        for (let i = 0; i < metaInfomration.length; i++) {
            copyrightHeader.innerText = metaInfomration[i].copyright;
        }
    });
    
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'Enter') {
            window.location = directory + 'administrative-login.html';
        } else {
            return;
        }
    });
    
    setTimeout(() => {
    
        // Retrieving the string
        let cartItemsString = localStorage.getItem("rrnCart")

        // turns string back into JSON
        let cartItems = JSON.parse(cartItemsString);
    
        let cartItemsAmount = 0;
    
        for (let i = 0; i < cartItems.length; i++) {
            let shopItemQuantity = cartItems[i].quantity;
    
            if(shopItemQuantity > 0) {
                cartItemsAmount++;
            } else {
                console.log('cartItem was not added to cart and is not valid');
            }
        }
    
        if(localStorage.getItem('rrnCart') == null) {
            localStorage.setItem('rrnCart', '');
        } else if (cartItemsAmount >= 1) {
            let cartItems = document.getElementById('cartItems');
            cartItems.style.display = 'flex';
        } else if (cartItemsAmount == 0) {
            let cartItems = document.getElementById('cartItems');
            cartItems.style.display = 'none';
        }
    }, "1000");
}