var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });

  var url = req.url;

  if (url === '/') {
    fs.readFile('assets/home.html', function (err, data) {
        res.end(data)
    })
  }
  else if (url === '/visi-misi') {
    fs.readFile('assets/visi-misi.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/sambutan') {
    fs.readFile('assets/sambutan.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/blog') {
    fs.readFile('assets/blog.html', function (err, data) {
      res.end(data)
    })
  }
  else if (url === '/perpus') {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    fs.readFile('assets/tokyo-revengers-chapter-239.pdf', function (err, data) {
      res.end(data)
    })
  }
  else {
    res.write('<center><h1>......... ERROR .........</h1></center>');
    res.end()
  }
}).listen(5000, function () {

  console.log("server start at http://localhost:5000");
});