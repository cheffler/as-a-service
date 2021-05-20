const http = require('http');

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Something from the backend')
})

server.listen(2000, ()=>{
  console.log('server up and running on port 2000')
})
