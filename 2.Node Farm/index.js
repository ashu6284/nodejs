const { error } = require("console");
const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const tempOverview = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);
const tempCard = fs.readFileSync("./templates/template-card.html", "utf-8");
const tempProduct = fs.readFileSync(
  "./templates/template-product.html",
  "utf-8"
);
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  // OVERVIEW
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "content-type": "text/html" });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    // console.log(cardsHtml);
    res.end(output);
  }
  //   PRODUCT
  else if (pathname === "/product") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  //   API
  else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  }
  //   NOT FOUND
  else {
    res.end("error");
  }
});
server.listen(3000, "127.0.0.1", () => {
  console.log("listening");
});
