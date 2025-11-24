// calculate revenue for the current month

function determinMonthlyDate(dateOrdered, userCartRaw) {

    let orderMonth;

    let orderDate = dateOrdered.innerText;

    // checks if month is single digit
    if (orderDate[1] == '/') {
        if (parseInt(orderDate[0]) != mm)
            return;

        let orderedYYYY;

        if (orderDate[3] == '/') {
            orderedYYYY = orderDate[4] + orderDate[5] + orderDate[6] + orderDate[7];
        } else { orderedYYYY = orderDate[5] + orderDate[6] + orderDate[7] + orderDate[8]; }
        
        orderedYYYY = parseInt(orderedYYYY);

        if (orderedYYYY != yyyy)
            return;

        orderMonth = orderDate[0];
        orderMonth = parseInt(orderMonth);

    } else {
        // this means the month is a double digit

        if (parseInt(orderDate[0] + parseInt(orderDate[1])) != mm)
            return;

        let orderedYYYY;

        if (orderDate[4] == '/') {
            orderedYYYY = orderDate[5] + orderDate[6] + orderDate[7] + orderDate[8];
        } else { orderedYYYY = orderDate[6] + orderDate[7] + orderDate[8] + orderDate[9]; }
        
        orderedYYYY = parseInt(orderedYYYY);

        if (orderedYYYY != yyyy)
            return;

        // if not the month is a double digit
        orderMonth = orderDate[0] + orderDate[1];
        orderMonth = parseInt(orderMonth);
    }

    if (orderMonth == mm) {
        calcMonthlyOrderTotal(userCartRaw);
    }

}

// calculate order total

function calcMonthlyOrderTotal(userCartRaw) {

    monthlyOrderTotalPrice = [];
    let monthlyOrderTotal;

    let userCart = JSON.parse(userCartRaw);

    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        for (let i = 0; i < userCart.length; i++) {
            let shopItemID = userCart[i].itemID;
            let shopItemQuantity = userCart[i].quantity;

            let itemPrice = rrnShopItems[shopItemID].itemPrice;

            monthlyOrderTotalPrice.push(shopItemQuantity * itemPrice);

            monthlyOrderTotal = monthlyOrderTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            totalMonthlyRevenue = monthlyOrderTotal;

            appendMonthlyRevenue(totalMonthlyRevenue);
        }
    });
}

function appendMonthlyRevenue(totalMonthlyRevenue) {
    let monthlyRevenueValue = document.getElementById('monthlyRevenueValue');

    monthlyRevenueValue.innerText = totalMonthlyRevenue;

    setTimeout(() => {
        monthlyRevenueValue.innerText = '$' + totalMonthlyRevenue.toLocaleString();
    }, 2000);
}