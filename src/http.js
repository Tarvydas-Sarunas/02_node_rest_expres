const http = require("http"); // Importuojame http i musu JS koda kuris klausosi front ir duoda is back

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body ===", body);
      });
  })
  .listen(8080); // Activates this server, listening on port 8080.
