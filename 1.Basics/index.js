const { error } = require("console");
const fs = require("fs");
const http = require("http");
const url = require("url");
//1.BLOCKING OR SYNC CODE

// const inputfile = fs.readFileSync("./txt/input.txt", "utf-8");
// const data = "ashu is the king";
// fs.writeFileSync("./txt/output.text", data);
// const fileNew = fs.readFileSync("./txt/output.txt", "utf-8");
// console.log(fileNew);
// -----------------------------------------------------------

// 2.NON BLOCKING CODE

// console.log("namaste");
// fs.readFile("./txt/test.txt", "utf-8", (error, data) => {
//   console.log(data);
// });
// console.log("ram ram");
// *******************************************************************

// 3.SERVER

// const server = http.createServer((req, res) => {
//   res.end("hello i m from the server");
// });
// server.listen(3000, "127.0.0.1", () => {
//   console.log("listening");
// });
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5

// 4.ROUTING

// const data = fs.readFileSync("./dev-data/data.json", "utf-8");
// const dataObj = JSON.parse(data);
// const server = http.createServer((req, res) => {
//   if (req.url === "/" || req.url === "/overview") {
//     res.end("This is overview");
//   } else if (req.url === "/product") {
//     res.end("This is product");
//   } else if (req.url === "/api") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(data);
//   } else {
//     res.end("error");
//   }
// });
// server.listen(3000, "127.0.0.1", () => {
//   console.log("listening");
// });
