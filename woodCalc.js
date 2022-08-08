// chair = 3 cft;
// table = 10 cft;
// bed = 50 cft;

function woodCalculator(chair, table, bed) {
  totalChair = chair * 3;
  totalTable = table * 10;
  totalBed = bed * 50;
  totalAmount = totalChair + totalTable + totalBed;
  return totalAmount;
}
let numOfChair = 17;
let numOfTable = 5;
let numOfBed = 3;
let total = woodCalculator(numOfChair, numOfTable, numOfBed);
console.log(total, "cft");
