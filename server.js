const http = require("http");
const PORT = 3000;
const html = require("fs").readFileSync("./index.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);

  if (req.method == "GET") {
  }

  res.end();
});

server.listen(PORT, () => {
  console.log("server running!");
});
