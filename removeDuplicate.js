let names = [
  "Abir",
  "Moyna",
  "Tiya",
  "Shofiq",
  "Rofiq",
  "Jamal",
  "Moyna",
  "Shofiq",
  "Shofiq",
  "Shofiq",
  "Pagla"
];
let uniqueName = [];
for (let i = 0; i < names.length; i++) {
  element = names[i];
  //   console.log(element);
  let exist = uniqueName.includes(element);
  if (exist===false) {
      uniqueName.push(element);
  }
}
console.log(uniqueName);
