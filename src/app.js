const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
     
      let result = 1;
      if(value1 < 1 && value2 < 0){
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write('404 Not Found')
      }
      else{
        for(let i=0;i<value2;i++){
          result = result*value1

     }
    //  res.status(200).send(result)
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(result)
      }
  });
    }
});

module.exports = server;
      