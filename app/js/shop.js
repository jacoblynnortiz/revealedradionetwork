let shopTypeHeader = document.getElementById('shopTypeHeader');

let ls = localStorage;

if (ls.getItem('rrnCart') == '') {
    let rrnDefaultCart = [
        {
            "itemID": 0,
            "quantity": 0
        }
    ]

    let rrnDefaultCartString = JSON.stringify(rrnDefaultCart)

    localStorage.setItem("rrnCart", rrnDefaultCartString)
}

// Retrieving the string
let cartItemsString = localStorage.getItem("rrnCart");

// turns string back into JSON
let cartItems = JSON.parse(cartItemsString);

// window.location = 'index.html';

addItemBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let newItemIDString = addItemIDInput.value;
    let newItemQuantityString = parseInt(quantityInput.value);

    let newItem = { 'itemID': newItemIDString, 'quantity': newItemQuantityString }

    cartItems.push(newItem);

    addItemIDInput.value = '';

    let cartItemsString = JSON.stringify(cartItems);

    ls.setItem("rrnCart", cartItemsString);

    window.location = 'shop.html';
});

// renders the shop items based on what category you clicked

if (document.URL == 'https://revealedradionetwork.site/shop.html#all' || document.URL == 'https://revealedradionetwork.site/shop.html' || document.URL == 'http://127.0.0.1:5500/shop.html#all' || document.URL == 'http://127.0.0.1:5500/shop.html') {
    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        let shopItemsContainer = document.getElementById('shopItemsContainer');

        document.title = 'RRN Shop | All';

        shopTypeHeader.innerText = 'Shop | all';

        for (let i = 0; i < rrnShopItems.length; i++) {

            let shopItemContainer = document.createElement('div');
            shopItemContainer.classList.add('shop-item');

            let shopItemPreview = document.createElement('div');
            let shopItemPreviewImg = document.createElement('img');
            let shopItemTitle = document.createElement('h3');
            let shopItemPrice = document.createElement('h4');
            let shopItemAddBtn = document.createElement('button');

            shopItemPreview.classList.add('shop-item-preview');
            shopItemPreviewImg.src = rrnShopItems[i].itemImagePreview;
            shopItemTitle.innerText = rrnShopItems[i].itemTitle;
            shopItemPrice.innerText = '$' + rrnShopItems[i].itemPrice;
            shopItemAddBtn.innerText = 'Add to Cart';
            shopItemAddBtn.setAttribute('onclick', 'addItem(' + rrnShopItems[i].itemID + ');');

            shopItemPreview.appendChild(shopItemPreviewImg);
            shopItemContainer.appendChild(shopItemPreview);
            shopItemContainer.appendChild(shopItemTitle);
            shopItemContainer.appendChild(shopItemPrice);
            shopItemPrice.appendChild(shopItemAddBtn);
            shopItemsContainer.appendChild(shopItemContainer);
        }
    });
} else if (document.URL == 'https://revealedradionetwork.site/shop.html#books' || document.URL == 'http://127.0.0.1:5500/shop.html#books') {
    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        let shopItemsContainer = document.getElementById('shopItemsContainer');

        document.title = 'RRN Shop | Books';

        shopTypeHeader.innerText = 'Shop | books';

        for (let i = 0; i < rrnShopItems.length; i++) {

            let shopItemContainer = document.createElement('div');
            shopItemContainer.classList.add('shop-item');

            let shopItemPreview = document.createElement('div');
            let shopItemPreviewImg = document.createElement('img');
            let shopItemTitle = document.createElement('h3');
            let shopItemPrice = document.createElement('h4');
            let shopItemAddBtn = document.createElement('button');

            shopItemPreview.classList.add('shop-item-preview');
            shopItemPreviewImg.src = rrnShopItems[i].itemImagePreview;
            shopItemTitle.innerText = rrnShopItems[i].itemTitle;
            shopItemPrice.innerText = '$' + rrnShopItems[i].itemPrice;
            shopItemAddBtn.innerText = 'Add to Cart';
            shopItemAddBtn.setAttribute('onclick', 'addItem(' + rrnShopItems[i].itemID + ');');

            shopItemPreview.appendChild(shopItemPreviewImg);
            shopItemContainer.appendChild(shopItemPreview);
            shopItemContainer.appendChild(shopItemTitle);
            shopItemContainer.appendChild(shopItemPrice);
            shopItemPrice.appendChild(shopItemAddBtn);

            if (rrnShopItems[i].category == 'books') {
                shopItemsContainer.appendChild(shopItemContainer);
            } else {
                console.log('not related')
            }
        }
    });
} else if (document.URL == 'https://revealedradionetwork.site/shop.html#pens' || document.URL == 'http://127.0.0.1:5500/shop.html#pens') {
    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        let shopItemsContainer = document.getElementById('shopItemsContainer');

        document.title = 'RRN Shop | Pens';

        shopTypeHeader.innerText = 'Shop | pens';

        for (let i = 0; i < rrnShopItems.length; i++) {

            let shopItemContainer = document.createElement('div');
            shopItemContainer.classList.add('shop-item');

            let shopItemPreview = document.createElement('div');
            let shopItemPreviewImg = document.createElement('img');
            let shopItemTitle = document.createElement('h3');
            let shopItemPrice = document.createElement('h4');
            let shopItemAddBtn = document.createElement('button');

            shopItemPreview.classList.add('shop-item-preview');
            shopItemPreviewImg.src = rrnShopItems[i].itemImagePreview;
            shopItemTitle.innerText = rrnShopItems[i].itemTitle;
            shopItemPrice.innerText = '$' + rrnShopItems[i].itemPrice;
            shopItemAddBtn.innerText = 'Add to Cart';
            shopItemAddBtn.setAttribute('onclick', 'addItem(' + rrnShopItems[i].itemID + ');');

            shopItemPreview.appendChild(shopItemPreviewImg);
            shopItemContainer.appendChild(shopItemPreview);
            shopItemContainer.appendChild(shopItemTitle);
            shopItemContainer.appendChild(shopItemPrice);
            shopItemPrice.appendChild(shopItemAddBtn);

            if (rrnShopItems[i].category == 'pens') {
                shopItemsContainer.appendChild(shopItemContainer);
            } else {
                console.log('not related')
            }
        }
    });
} else if (document.URL == 'https://revealedradionetwork.site/shop.html#shirts' || document.URL == 'http://127.0.0.1:5500/shop.html#shirts') {
    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        let shopItemsContainer = document.getElementById('shopItemsContainer');

        document.title = 'RRN Shop | Shirts';

        shopTypeHeader.innerText = 'Shop | shirts';

        for (let i = 0; i < rrnShopItems.length; i++) {

            let shopItemContainer = document.createElement('div');
            shopItemContainer.classList.add('shop-item');

            let shopItemPreview = document.createElement('div');
            let shopItemPreviewImg = document.createElement('img');
            let shopItemTitle = document.createElement('h3');
            let shopItemPrice = document.createElement('h4');
            let shopItemAddBtn = document.createElement('button');

            shopItemPreview.classList.add('shop-item-preview');
            shopItemPreviewImg.src = rrnShopItems[i].itemImagePreview;
            shopItemTitle.innerText = rrnShopItems[i].itemTitle;
            shopItemPrice.innerText = '$' + rrnShopItems[i].itemPrice;
            shopItemAddBtn.innerText = 'Add to Cart';
            shopItemAddBtn.setAttribute('onclick', 'addItem(' + rrnShopItems[i].itemID + ');');

            shopItemPreview.appendChild(shopItemPreviewImg);
            shopItemContainer.appendChild(shopItemPreview);
            shopItemContainer.appendChild(shopItemTitle);
            shopItemContainer.appendChild(shopItemPrice);
            shopItemPrice.appendChild(shopItemAddBtn);

            if (rrnShopItems[i].category == 'shirts') {
                shopItemsContainer.appendChild(shopItemContainer);
            } else {
                console.log('not related')
            }
        }
    });
} else {
    console.log('an error occured');
}

let windowLocation = window.location.href;

setInterval(() => {
    if (windowLocation != window.location.href) {
        window.location.reload();
    }
}, "2000");

function addItem(itemID) {

    // Retrieving the string
    let cartItemsString = localStorage.getItem("rrnCart")

    // turns string back into JSON
    let cartItems = JSON.parse(cartItemsString);

    let newCartItem = {"itemID": itemID, "quantity": 1}

    cartItems.push(newCartItem);

    // turns json back into string and saves the cart to local storage and reloads page

    let rrnCartItemsString = JSON.stringify(cartItems);

    localStorage.setItem("rrnCart", rrnCartItemsString);

    window.location = 'shop.html';
}