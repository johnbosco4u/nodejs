const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from GitHub Actions!");
});

server.listen(3000);

