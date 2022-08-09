let numbers = [32, 54, 31, 56, 77, 34, -44, 39, -50, 66];

function positiveNum(numbers) {
  posiNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 1) {
      posiNum.push(numbers[i]);
    } else {
      break;
    }
  }
  console.log(posiNum);
}
positiveNum(numbers);

// console.log(numbers);
