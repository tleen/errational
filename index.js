'use strict';

var configuration = require('config'),
http = require('http'),
proxy = require('http-proxy');

console.log(configuration);

// work as a proxy
var prx = proxy.createProxyServer({});

var server = http.createServer(function(req, res){
  // do it
  prx.web(req, res, {target: configuration.target });
});

server.listen(configuration.port);

