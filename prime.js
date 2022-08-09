// function isPrime(num) {
//   if (num < 2) return false;
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let result = isPrime(19);
console.log(result);
if (result === false) {
  console.log("Not a prime number");
} else {
  console.log("is a prime");
}
