// calculate revenue for the current day

function determinDailyDate(dateOrdered, userCartRaw) {

    let orderDay;

    let orderDate = dateOrdered.innerText;

    // checks if month is single digit
    if (orderDate[1] == '/') {
        if (parseInt(orderDate[0]) != mm)
            return;

        // if so it also checks if the day is a single digit
        if (orderDate[3] == '/') {
            let orderedYYYY = orderDate[4] + orderDate[5] + orderDate[6] + orderDate[7];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            orderDay = orderDate[2];
            orderDay = parseInt(orderDay);
        } else {
            let orderedYYYY = orderDate[5] + orderDate[6] + orderDate[7] + orderDate[8];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            // if not the day is a double digit
            orderDay = orderDate[2] + orderDate[3];
            orderDay = parseInt(orderDay);
        }
    }

    // checks if month is double digit
    if (orderDate[2] == '/') {
        if (parseInt(orderDate[0] + parseInt(orderDate[1])) != mm)
            return;
        // if so it also checks if the day is a single digit
        if (orderDate[4] == '/') {
            let orderedYYYY = orderDate[5] + orderDate[6] + orderDate[7] + orderDate[8];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            orderDay = orderDate[3];
            orderDay = parseInt(orderDay);
        } else {
            let orderedYYYY = orderDate[6] + orderDate[7] + orderDate[8] + orderDate[9];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            // if not the day is a double digit
            orderDay = orderDate[3] + orderDate[4];
            orderDay = parseInt(orderDay);
        }
    }

    if (orderDay == dd) {
        calcOrderTotal(userCartRaw);
    }

}

// calculate order total

function calcOrderTotal(userCartRaw) {

    orderTotalPrice = [];
    let orderTotal;

    let userCart = JSON.parse(userCartRaw);

    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        for (let i = 0; i < userCart.length; i++) {
            let shopItemID = userCart[i].itemID;
            let shopItemQuantity = userCart[i].quantity;

            let itemPrice = rrnShopItems[shopItemID].itemPrice;

            orderTotalPrice.push(shopItemQuantity * itemPrice);

            orderTotal = orderTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            totalDailyRevenue = orderTotal;

            appendDailyRevenue(totalDailyRevenue);
        }
    });
}

function appendDailyRevenue(totalDailyRevenue) {
    let dailyRevenueValue = document.getElementById('dailyRevenueValue');

    dailyRevenueValue.innerText = totalDailyRevenue;

    setTimeout(() => {
        dailyRevenueValue.innerText = '$' + totalDailyRevenue.toLocaleString();
    }, 2000);
}