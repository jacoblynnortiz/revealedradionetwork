let ls = localStorage;

let cartEmptyContainer = document.getElementById('cartEmptyContainer');
let cartContainer = document.getElementById('cartContainer');

// this checks if the user has a cart variable, if not it creates one,
// if you do and its value is empty it does nothing but if it isnt empty it hide the empty cart section

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

if (ls.getItem('rrnCart') == '') {
    console.log('there is currently no cart')
} else if (ls.getItem('rrnCart') != '') {
    cartEmptyContainer.style.display = 'none';
    cartContainer.style.display = 'flex';
}

// Retrieving the string
let cartItemsString = localStorage.getItem("rrnCart")

// turns string back into JSON
let cartItems = JSON.parse(cartItemsString);

let cartItemsList = document.getElementById('cartItemsList');

let itemsAmount = document.getElementById('itemsAmount');
let totalPrice1 = document.getElementById('totalPrice1');
let totalPrice2 = document.getElementById('totalPrice2');

let totalPrice = [];
let totalItems = [];

let cartItemsAmount = 0;
let cartItemsQuantity = 0;

$.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
    for (let i = 0; i < cartItems.length; i++) {

        let cartItem = document.createElement('div');
        let cartItemPreviewContainer = document.createElement('div');
        let cartItemTitleContainer = document.createElement('div');
        let cartItemQuantityContainer = document.createElement('div');
        let cartItemPriceContainer = document.createElement('div');

        let cartItemPreview = document.createElement('img');
        let cartItemTitle = document.createElement('h5');
        let cartItemQuantityMobile = document.createElement('h5');
        let cartItemPriceMobile = document.createElement('h5');

        let cartItemQuantity = document.createElement('h5');
        let cartItemPrice = document.createElement('h5');

        let cartItemDeleteBtn = document.createElement('button');
        let cartItemDeleteBtnIcon = document.createElement('i');

        cartItemPreviewContainer.classList.add('item-info');
        cartItemTitleContainer.classList.add('item-info');
        cartItemQuantityContainer.classList.add('item-info');
        cartItemPriceContainer.classList.add('item-info');

        cartItemPreviewContainer.classList.add('item-preview');
        cartItemTitleContainer.classList.add('item-title');
        cartItemQuantityContainer.classList.add('item-quantity');
        cartItemPriceContainer.classList.add('item-price');

        cartItemPreviewContainer.style.maxWidth = '10%';
        cartItemTitleContainer.style.maxWidth = '50%';
        cartItemQuantityContainer.style.maxWidth = '20%';
        cartItemPriceContainer.style.maxWidth = '20%';

        let shopItemID = cartItems[i].itemID;

        let shopItemQuantity = cartItems[i].quantity;

        cartItemPreview.src = rrnShopItems[shopItemID].itemImagePreview;

        cartItemTitle.innerText = rrnShopItems[shopItemID].itemTitle;

        cartItemQuantityMobile.innerText = 'x' + shopItemQuantity;
        cartItemQuantity.innerText = 'x' + shopItemQuantity;

        cartItemPriceMobile.innerText = '$' + shopItemQuantity * rrnShopItems[shopItemID].itemPrice;
        cartItemPrice.innerText = '$' + shopItemQuantity * rrnShopItems[shopItemID].itemPrice;

        totalPrice.push(shopItemQuantity * rrnShopItems[shopItemID].itemPrice);

        totalItems.push(shopItemQuantity);

        cartItemDeleteBtn.classList.add('delete-item');
        cartItemDeleteBtnIcon.classList.add('fa-solid');
        cartItemDeleteBtnIcon.classList.add('fa-x');

        cartItemDeleteBtn.setAttribute('onclick', 'deleteItem(' + i + ');');

        cartItem.classList.add('cart-item');

        cartItemPreviewContainer.appendChild(cartItemPreview);
        cartItemTitleContainer.appendChild(cartItemTitle);
        cartItemTitleContainer.appendChild(cartItemQuantityMobile);
        cartItemTitleContainer.appendChild(cartItemPriceMobile);

        cartItemQuantityContainer.appendChild(cartItemQuantity);

        cartItemQuantityContainer.appendChild(cartItemQuantity);

        cartItemPriceContainer.appendChild(cartItemPrice);

        cartItem.appendChild(cartItemPreviewContainer);
        cartItem.appendChild(cartItemTitleContainer);
        cartItem.appendChild(cartItemQuantityContainer);
        cartItem.appendChild(cartItemPriceContainer);
        cartItemDeleteBtn.appendChild(cartItemDeleteBtnIcon);
        cartItem.appendChild(cartItemDeleteBtn);

        if (shopItemQuantity > 0) {
            cartItemsList.appendChild(cartItem);
            cartItemsAmount++;
            cartItemsQuantity++;
        } else {
            console.log(cartItem + ' was not added to cart and is not valid');
        }

        if (cartItemsAmount >= 2) {
            itemsAmount.innerText = itemsAmount.innerText = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + ' items';

            cartEmptyContainer.style.display = 'none';
            cartContainer.style.display = 'flex';
        } else if (cartItemsAmount == 1) {
            itemsAmount.innerText = itemsAmount.innerText = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + ' item';

            if (parseInt(itemsAmount.innerText) >= 2) {
                itemsAmount.innerText = itemsAmount.innerText = totalItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0) + ' items';
            }

            cartEmptyContainer.style.display = 'none';
            cartContainer.style.display = 'flex';
        } else if (cartItemsAmount == 0) {
            cartEmptyContainer.style.display = 'flex';
            cartContainer.style.display = 'none';
        }
    }

    // calculates how much all your cart items cost total


    totalPrice1.innerText = '$' + totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalPrice2.innerText = '$' + totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
});

function deleteItem(item) {
    cartItems[item].quantity = 0;

    let rrnCartItemsString = JSON.stringify(cartItems);

    localStorage.setItem("rrnCart", rrnCartItemsString);

    window.location = 'cart.html';
}

let currentCart = ls.getItem('rrnCart');

setInterval(() => {
    if (currentCart != ls.getItem('rrnCart')) {
        window.location.reload();
    }
}, "1000")