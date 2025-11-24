$.getJSON('app/js/rrnShopItems.json', function (rrnShopItems) {
    let suggestedItemsContainer = document.getElementById('suggestedItemsContainer');

    for (let i = 0; i < rrnShopItems.length; i++) {

        if (rrnShopItems[i].suggested == true) {
            let suggestedItemContainer = document.createElement('div');
            suggestedItemContainer.classList.add('suggested-item');

            let suggestedItemPreview = document.createElement('div');
            let suggestedItemPreviewImg = document.createElement('img');
            let suggestedItemTitle = document.createElement('h3');
            let suggestedItemPrice = document.createElement('h4');
            let suggestedItemAddBtn = document.createElement('button');

            suggestedItemPreview.classList.add('suggested-item-preview');
            suggestedItemPreviewImg.src = rrnShopItems[i].itemImagePreview;
            suggestedItemTitle.innerText = rrnShopItems[i].itemTitle;
            suggestedItemPrice.innerText = '$' + rrnShopItems[i].itemPrice;
            suggestedItemAddBtn.innerText = 'Add to Cart';
            suggestedItemAddBtn.setAttribute('onclick', 'addItem(' + rrnShopItems[i].itemID + ');');

            suggestedItemPreview.appendChild(suggestedItemPreviewImg);
            suggestedItemContainer.appendChild(suggestedItemPreview);
            suggestedItemContainer.appendChild(suggestedItemTitle);
            suggestedItemContainer.appendChild(suggestedItemPrice);
            suggestedItemPrice.appendChild(suggestedItemAddBtn);
            suggestedItemsContainer.appendChild(suggestedItemContainer);
        }
    }
});

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

    window.location = 'cart.html';
}