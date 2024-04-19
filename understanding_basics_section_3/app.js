const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    console.log(url);
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' /><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY 123456");
    res.statusCode = 302;
    res.setHeader("Location", "/files");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Node server response</title></head>");
  res.write("<body><h1>Hello World !!!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
