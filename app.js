// var finalhandler = require('finalhandler')
var http = require('http');
// var serveStatic = require('serve-static')

// // Serve up public/ftp folder
// var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.html']})

// // Create server
// var server = http.createServer(function onRequest (req, res) {
//   serve(req, res, finalhandler(req, res))
// })

// // Listen
// server.listen(8080)
var express = require('express');
var app = express();
app.use(express.static('public'));
// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
// const server = http.createServer(handleRequest);

// Start the server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});


// app.use(express.static('images'));

// app.listen(PORT);