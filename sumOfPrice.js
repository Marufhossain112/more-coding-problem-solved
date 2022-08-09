const phonesList = [
  { name: "Nokia", model: "Xpress music", price: 1500, camera: 1.5 },
  { name: "Symphony", model: "W68Q", price: 6500, camera: 4.5 },
  { name: "Samsung", model: "Tab 4", price: 2000, camera: 5.5 },
  { name: "Nokia", model: "1100", price: 1000, camera: 5.5 },
  { name: "Sony", model: "AX1", price: 3500, camera: 6.5 },
  { name: "Oppo", model: "54RXo", price: 15900, camera: 10.5 },
  { name: "Iphone", model: "10", price: 65000, camera: 20.5 },
];

function sumOfPrice(phone) {
  let total = 0;
  for (let i = 0; i < phone.length; i++) {
    const element = phone[i].price;
    console.log(element);
    total = total + element;
    let priceList = element.price;
    // console.log(priceList);
  }
  console.log("total", total);
}
let result = sumOfPrice(phonesList);
// console.log(result);
