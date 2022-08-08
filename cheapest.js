const phonesList = [
  { name: "Nokia", model: "Xpress music", price: 1500, camera: 1.5 },
  { name: "Symphony", model: "W68Q", price: 6500, camera: 4.5 },
  { name: "Samsung", model: "Tab 4", price: 2000, camera: 5.5 },
  { name: "Nokia", model: "1100", price: 1000, camera: 5.5 },
  { name: "Sony", model: "AX1", price: 3500, camera: 6.5 },
  { name: "Oppo", model: "54RXo", price: 15900, camera: 10.5 },
  { name: "Iphone", model: "10", price: 65000, camera: 20.5 },
];

function cheapestPhone(phones) {
  //   cheapestPhone = [];
  //   assumeCheapest = phones[0].price;
  //   console.log(assumeCheapest);
  let storePrices = [];
  for (let i = 0; i < phones.length; i++) {
    element = phones[i].price;
    storePrices.push(element);
  }
  let cheapest = storePrices[0];
  for (let i = 0; i < storePrices.length; i++) {
    element = storePrices[i];
    // console.log(element);
    if (element < cheapest) {
      cheapest = element;
      //   console.log(cheapest);
    }
  }
//   console.log(cheapest);
  //   console.log(phonesList);
  //   console.log(firstCheap);
  //   console.log(storePrices);
  return cheapest;
}
let result = cheapestPhone(phonesList);
console.log(result);
