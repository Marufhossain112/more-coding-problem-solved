for (let i = 1; i <= 50; i++) {
  // console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log(i);
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log(i);
    console.log("bar");
  } else {
    console.log(i);
  }
}
