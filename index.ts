import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket){
  switch(price){
    case PriceBracket.low:
    return 10.0;
     case PriceBracket.Medium:
    return 20.0;
     case PriceBracket.High:
    return 30.0;
  }
}
/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders:Order[][]){
  let filterOrders: Order[][] = [];
  orders[0].filter((order: Order)=> order.price <=  getMaxPrice(price));

  orders.forEach((resturant: Order[]) => {
    const result = resturant.filter((order: Order) => order.price <=  getMaxPrice(price));
    filterOrders.push(result);
  });
  return filterOrders;
}
/// Add your printOrders() function below:
function printOrders(resturants: Restaurant[], orders: Order[][]){
  resturants.forEach((resturant: Restaurant, index: number)=> {
    if(orders[index].length > 0){
      console.log(resturant.name);
      orders[index].forEach((order)=> {
        console.log(`-${order.name}:${order.price}`);
      })
    }
  })
}
/// Main

const elligibleOrders = getOrders(PriceBracket.low, orders);
printOrders(restaurants, elligibleOrders);
