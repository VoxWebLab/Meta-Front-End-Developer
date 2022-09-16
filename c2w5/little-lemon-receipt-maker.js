// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (dish of dishData) {
        let finalPrice;
        if (taxBoolean == true) {
            finalPrice = dish.price * tax;
        }
        else if (taxBoolean == false) {
            finalPrice = dish.price;
        }
        else {
            console.log("You need to pass a boolean to the getrPrices call!");
            return
        }
        console.log("Dish: " + dish.name, "Price: $" + finalPrice);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    let condition = typeof(guests) == 'number' && guests > 0 && guests < 30;
    if (condition) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    }
    else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
console.log('----------------');
console.log('test 1: true, 2:');
getDiscount(true, 2);
console.log('------------------');
console.log('test 2: false, 10:');
getDiscount(false, 10);
console.log('---------------------');
console.log('test 3: no arguments:');
getDiscount();
console.log('-----------------------');
console.log('test 4: string, string:');
getDiscount('true', '2');
console.log('------------------------------------');
console.log('test 5: string, number out of range:');
getDiscount('false', 40);