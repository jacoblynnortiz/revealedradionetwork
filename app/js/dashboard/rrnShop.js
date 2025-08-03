// monthly, daily and yearly revenue

let monthlyRevenue = [];
let dailyRevenue = [];
let yearlyRevenue = [];

let orderTotalPrice;
let totalDailyRevenue;

let monthlyOrderTotalPrice;
let totalMonthlyRevenue;

let orderPreviousTotalPrice;
let totalPreviousDailyRevenue;

let monthlyOrderPreviousTotalPrice;
let totalPreviousMonthlyRevenue;

// Week Sales Chart

const xValuesWeekly = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

new Chart("weeklyChart", {
  type: "line",
  data: {
    labels: xValuesWeekly,
    datasets: [{
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "#3c7cb9",
      fill: false
    }]
  },
  options: {
    legend: { display: false }
  }
});

// Monthly Sales Chart

const xValuesMonthly = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

new Chart("monthlyChart", {
  type: "line",
  data: {
    labels: xValuesMonthly,
    datasets: [{
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "#3c7cb9",
      fill: false
    }]
  },
  options: {
    legend: { display: false }
  }
});

// Yearly Sales Chart

const xValuesYearly = ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];

new Chart("yearlyChart", {
  type: "line",
  data: {
    labels: xValuesYearly,
    datasets: [{
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "#3c7cb9",
      fill: false
    }]
  },
  options: {
    legend: { display: false }
  }
});

// monthly, daily and yearly dates

let monthlyDate = document.getElementById('monthlyDate');
let dailyDate = document.getElementById('dailyDate');
let yearlyDate = document.getElementById('yearlyDate');

let monthAbr;

switch (mm) {
  case 1: monthAbr = 'Jan'; break;
  case 2: monthAbr = 'Feb'; break;
  case 3: monthAbr = 'Mar'; break;
  case 4: monthAbr = 'Apr'; break;
  case 5: monthAbr = 'May'; break;
  case 6: monthAbr = 'Jun'; break;
  case 7: monthAbr = 'Jul'; break;
  case 8: monthAbr = 'Aug'; break;
  case 9: monthAbr = 'Sep'; break;
  case 10: monthAbr = 'Oct'; break;
  case 11: monthAbr = 'Nov'; break;
  case 12: monthAbr = 'Dec'; break;
}

nextMM = mm + 1;
nextYYYY = yyyy;

if (nextMM == 13) {
  nextMM = 1;
  nextYYYY = yyyy + 1;
}

switch (nextMM) {
  case 1: nextMonthAbr = 'Jan'; break;
  case 2: nextMonthAbr = 'Feb'; break;
  case 3: nextMonthAbr = 'Mar'; break;
  case 4: nextMonthAbr = 'Apr'; break;
  case 5: nextMonthAbr = 'May'; break;
  case 6: nextMonthAbr = 'Jun'; break;
  case 7: nextMonthAbr = 'Jul'; break;
  case 8: nextMonthAbr = 'Aug'; break;
  case 9: nextMonthAbr = 'Sep'; break;
  case 10: nextMonthAbr = 'Oct'; break;
  case 11: nextMonthAbr = 'Nov'; break;
  case 12: nextMonthAbr = 'Dec'; break;
}


todaysDate = monthAbr + ' ' + dd + ', ' + yyyy;

dailyDate.innerText = todaysDate;

monthlyDate.innerText = monthAbr + ' 1 - ' + nextMonthAbr + ' 1, ' + nextYYYY++;

yearlyDate.innerText = 'Jan 1, ' + yyyy + ' - Jan 1, ' + nextYYYY;

// generate orders

let shopOrders = document.getElementById('shopOrders');
let orderCount = document.getElementById('orderCount');

$.getJSON('https://sheetdb.io/api/v1/hr0awxntfqfzr', function (RRNshopOrders) {

  orderCount.innerText = RRNshopOrders.length;

  for (let order = RRNshopOrders.length - 1; order >= RRNshopOrders.length - RRNshopOrders.length; order--) {
    let newOrderContainer = document.createElement('li');
    let newOrderContent = document.createElement('ul');
    let viewOrder = document.createElement('button');

    // creates the elements for the users information

    let orderID = document.createElement('li');
    let email = document.createElement('li');
    let dateOrdered = document.createElement('li');
    let name = document.createElement('li');
    let address = document.createElement('li');

    let cardDetails = document.createElement('div');
    let cardDetailsContent = document.createElement('div');
    let cardNumber = document.createElement('li');
    let cardExp = document.createElement('li');
    let cardCVC = document.createElement('li');
    let cardName = document.createElement('li');
    let cardZipcode = document.createElement('li');

    // creates the users items the orders

    let userCart = document.createElement('span');

    userCart.id = 'order' + order;

    let userCartJSON = RRNshopOrders[order].userCart;

    let userCartRaw = RRNshopOrders[order].userCart;

    userCartJSON = JSON.parse(userCartJSON);

    userCart.innerText = JSON.stringify(userCartJSON);
    userCart.style.display = 'none';

    viewOrder.setAttribute('onclick', 'viewOrder(order' + order + ')');
    viewOrder.classList.add('view-order');
    viewOrder.innerText = 'View Order';

    orderID.innerText = '#' + order;
    dateOrdered.innerText = RRNshopOrders[order].dateOrdered;
    email.innerText = RRNshopOrders[order].email;
    name.innerText = RRNshopOrders[order].name;
    address.innerText = RRNshopOrders[order].address;
    let lotType = RRNshopOrders[order].lotType;
    let city = RRNshopOrders[order].city;
    let state = RRNshopOrders[order].state;
    let zipcode = RRNshopOrders[order].zipcode;

    cardDetails.classList.add('card-details');
    cardDetails.innerHTML = '<i class="fa-solid fa-credit-card"></i>';
    cardDetailsContent.classList.add('card-details-content');
    cardNumber.innerText = 'Card #: ' + RRNshopOrders[order].cardNumber;
    cardExp.innerText = 'Card Exp: ' + RRNshopOrders[order].cardExp;
    cardCVC.innerText = 'Card CVC: ' + RRNshopOrders[order].cardCVC;
    cardName.innerText = 'Card Name: ' + RRNshopOrders[order].cardName;
    cardZipcode.innerText = 'Card Zipcode: ' + RRNshopOrders[order].cardZipcode;

    address.innerText = address.innerText + ', ' + city + ', ' + state + ', ' + zipcode;

    if (RRNshopOrders[order].lotType != null) {
      address.innerText = address.innerText + ' (' + lotType + ')';
    }

    newOrderContainer.classList.add('order-list-item');

    newOrderContent.classList.add('order-list-item-content');

    // adds the users information to the order list item

    newOrderContent.appendChild(orderID);
    newOrderContent.appendChild(dateOrdered);
    newOrderContent.appendChild(email);
    newOrderContent.appendChild(name);
    newOrderContent.appendChild(address);
    cardDetailsContent.appendChild(cardNumber);
    cardDetailsContent.appendChild(cardExp);
    cardDetailsContent.appendChild(cardCVC);
    cardDetailsContent.appendChild(cardName);
    cardDetailsContent.appendChild(cardZipcode);
    cardDetails.appendChild(cardDetailsContent);

    newOrderContent.appendChild(cardDetails);

    newOrderContainer.appendChild(newOrderContent);

    newOrderContainer.appendChild(userCart);

    newOrderContainer.appendChild(viewOrder);

    shopOrders.appendChild(newOrderContainer);

    determinDailyDate(dateOrdered, userCartRaw);
    determinPreviousDailyDate(dateOrdered, userCartRaw);

    determinMonthlyDate(dateOrdered, userCartRaw);
    determinPreviousMonthlyDate(dateOrdered, userCartRaw);
  }
});

// view order

function viewOrder(userCartElement) {
  let userCart = userCartElement.innerText;

  localStorage.setItem('rrnCart', userCart);

  window.location.href = 'cart.html';
}