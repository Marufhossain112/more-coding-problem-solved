function triangleArea(a, b, c) {
  let add = a + b + c;
  let s = add / 2;
  let semiPerimeter = s * (s - a) * (s - b) * (s - c);
  let area = Math.sqrt(semiPerimeter);
  return area;
}
let result = triangleArea(10, 18, 11);
console.log(result);
