'use strict';

var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify({
    env: process.env.NODE_ENV
  }));
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:%d/', port);
