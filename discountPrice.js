function discountMeter(tickets) {
  let firstTicketPrice = 100;
  let secondTicketPrice = 90;
  let restTicketPrice = 70;

  if (tickets <= 100) {
    let first100Price = tickets * firstTicketPrice;
    total = first100Price;
    return total;
  } else if (tickets <= 200) {
    let first100Price = 100 * firstTicketPrice;
    let restTicketQuantity = tickets - 100;
    // console.log(restTicketQuantity);
    let restTicketPrice = restTicketQuantity * secondTicketPrice;
    total = first100Price + restTicketPrice;
    return total;
  } else {
    let first100Price = 100 * firstTicketPrice;
    let second100Price = 100 * secondTicketPrice;
    let restTicketQuantity = tickets - 200;
    let restTicketRate = restTicketQuantity * restTicketPrice;
    total = first100Price + second100Price + restTicketRate;
    return total;
  }
}
let result = discountMeter(512);
console.log(result);
