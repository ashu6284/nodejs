const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./file/test-file.txt", "utf-8");
  // stream.on("data", (chunk) => res.write(chunk));
  // stream.on("end", () => {
  //   res.end();
  // });
  stream.pipe(res);
});
server.listen(3000, "127.0.0.1", () => {
  console.log("i m listening");
});
