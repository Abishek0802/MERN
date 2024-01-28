const http = require("http");

//create a server
http
  .createServer((req, rep) => {
    console.log(req.url);
    console.log(req.method);
    rep.end("This is first response");
  })
  .listen(8000);
