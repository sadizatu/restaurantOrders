"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    let filterOrders = [];
    orders[0].filter((order) => order.price <= getMaxPrice(price));
    orders.forEach((resturant) => {
        const result = resturant.filter((order) => order.price <= getMaxPrice(price));
        filterOrders.push(result);
    });
    return filterOrders;
}
/// Add your printOrders() function below:
function printOrders(resturants, orders) {
    resturants.forEach((resturant, index) => {
        if (orders[index].length > 0) {
            console.log(resturant.name);
            orders[index].forEach((order) => {
                console.log(`-${order.name}:${order.price}`);
            });
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
