function paperRequirements(firstBook, secondBook, thirdBook) {
  const firstBookPaper = 100;
  const secondBookPaper = 200;
  const thirdBookPaper = 300;

  let firstBookPaperNeed = firstBookPaper*firstBook; 
  let secondBookPaperNeed = secondBookPaper*secondBook; 
  let thirdBookPaperNeed = thirdBookPaper*thirdBook; 

  total = firstBookPaperNeed + secondBookPaperNeed + thirdBookPaperNeed;
  return total;
}
let result = paperRequirements(6, 2, 7);
console.log(result);
