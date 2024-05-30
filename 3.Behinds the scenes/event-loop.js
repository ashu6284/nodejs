function first() {
  setTimeout(() => {
    console.log("timer");
  }, 0);
  console.log("first");
  second();
}
function second() {
  console.log("second");
  third();
}
function third() {
  console.log("third");
  process.nextTick(() => {
    console.log("tick");
  });
}
first();
