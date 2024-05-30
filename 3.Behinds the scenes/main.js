// console.log("1");
// Promise.resolve().then(() => {
//   console.log("promise 1");
// });
// process.nextTick(() => {
//   console.log("next tick");
// });
// Promise.resolve().then(() => {
//   console.log("promise 2");
// });
// console.log("2");

// conclusion from the above code is that according to the execution order first priority to syncronous code then async code.
// In async code first priority is microtask..then timer callbacks..then I/O callbacks...then Immediate callbacks...then closing calbacks

// process.nextTick(() => {
//   console.log("next tick 1");
// });
// process.nextTick(() => {
//   console.log("next tick 2");
// });
// process.nextTick(() => {
//   console.log("next tick 3");
// });
// process.nextTick(() => {
//   process.nextTick(() => console.log("inside another next nexttick queue"));
// });
// Promise.resolve().then(() => {
//   console.log("promise 1");
// });
// Promise.resolve().then(() => {
//   console.log("promise 2");
// });
// Promise.resolve().then(() => {
//   console.log("promise 3");
//   process.nextTick(() => {
//     console.log("next tick inside the promise");
//   });
// });
// Promise.resolve().then(() => {
//   console.log("promise 4");
// });

// agar promise queue agar chal rha ho toh aur bich mai nexttick queue aa jaye fir v promise queue chalega

// setTimeout(() => {
//   console.log("1");
// }, 0);
// setTimeout(() => {
//   console.log("2");
//   process.nextTick(() => {
//     console.log("process");
//   });
// }, 0);
// setTimeout(() => {
//   console.log("1");
// }, 0);

// const fs = require("fs");
// fs.readFile(__filename, () => {
//   console.log("1 file");
// });
// process.nextTick(() => {
//   console.log("a");
// });
// fs.readFile(__filename, () => {
//   console.log("4");
// });

// STREAM
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream("./ashu.txt", "utf-8");
//   stream.on("data", (chunk) => res.write(chunk));
//   stream.on("end", () => res.end());
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("i m listening");
// });

const fs = require("fs");
const http = require("http");
const readableStream = fs.createReadStream("./ashu.txt", "utf-8");
const writeableStream = fs.createWriteStream("./file/test-file.txt");

const server = http.createServer((req, res) => {
  readableStream.pipe(res);
});
server.listen(3000, "127.0.0.1", () => {
  console.log("lsitening");
});
