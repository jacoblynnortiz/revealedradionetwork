// calculate revenue for the previouis month

function determinPreviousMonthlyDate(dateOrdered, userCartRaw) {
    let previousOrderMonth;

    let orderDate = dateOrdered.innerText;

    // checks if month is single digit
    if (orderDate[1] == '/') {
        if (parseInt(orderDate[0]) != mm - 1)
            return;

        let orderedYYYY;

        if (orderDate[3] == '/') {
            orderedYYYY = orderDate[4] + orderDate[5] + orderDate[6] + orderDate[7];
        } else { orderedYYYY = orderDate[5] + orderDate[6] + orderDate[7] + orderDate[8]; }
        
        orderedYYYY = parseInt(orderedYYYY);

        if (orderedYYYY != yyyy)
            return;

        previousOrderMonth = orderDate[0];
        previousOrderMonth = parseInt(previousOrderMonth);

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
        previousOrderMonth = orderDate[0] + orderDate[1];
        previousOrderMonth = parseInt(previousOrderMonth);
    }

    if (previousOrderMonth == mm - 1) {
        calcPreviousMonthlyOrderTotal(userCartRaw);
    }

}

// calculate previous order total

function calcPreviousMonthlyOrderTotal(userCartRaw) {

    monthlyOrderPreviousTotalPrice = [];
    let previousMonthlyOrderTotal;

    let userCart = JSON.parse(userCartRaw);

    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        for (let i = 0; i < userCart.length; i++) {
            let shopItemID = userCart[i].itemID;
            let shopItemQuantity = userCart[i].quantity;

            let itemPrice = rrnShopItems[shopItemID].itemPrice;

            monthlyOrderPreviousTotalPrice.push(shopItemQuantity * itemPrice);

            previousMonthlyOrderTotal = monthlyOrderPreviousTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            totalPreviousMonthlyRevenue = previousMonthlyOrderTotal;

            calcPreviousMonthlyRevenue(totalPreviousMonthlyRevenue);
        }
    });

}

function calcPreviousMonthlyRevenue(totalPreviousMonthlyRevenue) {
    let monthlyRevenuePercentage = document.getElementById('monthlyRevenuePercentage');

    setTimeout(() => {
        let currentMonthlyRevenue = parseInt(monthlyRevenueValue.innerText);
        let previousMonthlyRevenue = parseInt(totalPreviousMonthlyRevenue);

        // calc percentage differnce of todays vs yesterdays cash flow

        let percentageDiff = Math.floor((currentMonthlyRevenue / previousMonthlyRevenue) * 100);

        monthlyRevenuePercentage.innerText = percentageDiff + '%';
        monthlyRevenuePercentage.classList.remove('up');
        monthlyRevenuePercentage.classList.add('down');

        if (currentMonthlyRevenue > previousMonthlyRevenue) {
            monthlyRevenuePercentage.classList.add('up');
            monthlyRevenuePercentage.classList.remove('down');
        } else {
            monthlyRevenuePercentage.innerText = '-' + monthlyRevenuePercentage.innerText;
            monthlyRevenuePercentage.classList.add('down');
            monthlyRevenuePercentage.classList.remove('up');
        }

        if (monthlyRevenuePercentage.innerText == '-NaN%') {
            monthlyRevenuePercentage.innerText = '0%';
        }

    }, 1500);
}