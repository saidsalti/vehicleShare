var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World\n");
});
server.listen(80);
console.log("Server running at http://165.227.161.248:80/");