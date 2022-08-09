// 1-100 -->> 100tk
// 101-200 -->> 90tk
// 201 -->> 70tk

function discountCalc(ticketAmount){
    let firstTicket = ticketAmount-100;
    let firstTicketPrice = firstTicket*100;

    let secondTicket = firstTicket - 100;
    let secondTicketPrice = secondTicket * 90;

    let restTicket = ticketAmount - (firstTicket+secondTicket);
    let restTicketPrice = restTicket * 70;

    let total = firstTicketPrice + secondTicketPrice + restTicketPrice;
    return total;
};
let ticketCount = 120;
let result = discountCalc(ticketCount);
console.log(result);
