// calculate revenue for the previouis day

function determinPreviousDailyDate(dateOrdered, userCartRaw) {
    let previousOrderDay;

    let previousOrderDate = dateOrdered.innerText;

    // checks if month is single digit
    if (previousOrderDate[1] == '/') {
        if (parseInt(previousOrderDate[0]) != mm)
            return;

        // if so it also checks if the day is a single digit
        if (previousOrderDate[3] == '/') {
            let orderedYYYY = previousOrderDate[4] + previousOrderDate[5] + previousOrderDate[6] + previousOrderDate[7];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            previousOrderDay = previousOrderDate[2];
            previousOrderDay = parseInt(previousOrderDay);
        } else {
            let orderedYYYY = previousOrderDate[5] + previousOrderDate[6] + previousOrderDate[7] + previousOrderDate[8];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            // if not the day is a double digit
            previousOrderDay = previousOrderDate[2] + previousOrderDate[3];
            previousOrderDay = parseInt(previousOrderDay);
        }
    }

    // checks if month is double digit
    if (previousOrderDate[2] == '/') {
        if (parseInt(previousOrderDate[0] + parseInt(previousOrderDate[1])) != mm)
            return;
        // if so it also checks if the day is a single digit
        if (previousOrderDate[4] == '/') {
            let orderedYYYY = previousOrderDate[5] + previousOrderDate[6] + previousOrderDate[7] + previousOrderDate[8];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            previousOrderDay = previousOrderDate[3];
            previousOrderDay = parseInt(previousOrderDay);
        } else {
            let orderedYYYY = previousOrderDate[6] + previousOrderDate[7] + previousOrderDate[8] + previousOrderDate[9];
            orderedYYYY = parseInt(orderedYYYY);

            if (orderedYYYY != yyyy)
                return;

            // if not the day is a double digit
            previousOrderDay = previousOrderDate[3] + previousOrderDate[4];
            previousOrderDay = parseInt(previousOrderDay);
        }
    }

    if (previousOrderDay == dd - 1) {
        calcPreviousOrderTotal(userCartRaw);
    }

}

// calculate previous order total

function calcPreviousOrderTotal(userCartRaw) {

    previousOrderTotalPrice = [];
    let previousOrderTotal;

    let userCart = JSON.parse(userCartRaw);

    $.getJSON('https://api.npoint.io/3f6afb2c8cacee7231a2', function (rrnShopItems) {
        for (let i = 0; i < userCart.length; i++) {
            let shopItemID = userCart[i].itemID;
            let shopItemQuantity = userCart[i].quantity;

            let itemPrice = rrnShopItems[shopItemID].itemPrice;

            previousOrderTotalPrice.push(shopItemQuantity * itemPrice);

            previousOrderTotal = previousOrderTotalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            totalPreviousDailyRevenue = previousOrderTotal;

            appendPreviousDailyRevenue(totalPreviousDailyRevenue);
        }
    });

}

function appendPreviousDailyRevenue(totalPreviousDailyRevenue) {
    let dailyRevenuePercentage = document.getElementById('dailyRevenuePercentage');

    setTimeout(() => {
        let currentDayRevenue = parseInt(dailyRevenueValue.innerText);
        let previousDayRevenue = parseInt(totalPreviousDailyRevenue);

        // calc percentage differnce of todays vs yesterdays cash flow

        let percentageDiff = Math.floor((currentDayRevenue / previousDayRevenue) * 100);

        dailyRevenuePercentage.innerText = percentageDiff + '%';
        dailyRevenuePercentage.classList.remove('up');
        dailyRevenuePercentage.classList.add('down');

        if (currentDayRevenue > previousDayRevenue) {
            dailyRevenuePercentage.classList.add('up');
            dailyRevenuePercentage.classList.remove('down');
        } else {
            dailyRevenuePercentage.innerText = '-' + dailyRevenuePercentage.innerText;
            dailyRevenuePercentage.classList.add('down');
            dailyRevenuePercentage.classList.remove('up');
        }

        if (dailyRevenuePercentage.innerText == '-NaN%') {
            dailyRevenuePercentage.innerText = '0%';
        }

    }, 1500);
}