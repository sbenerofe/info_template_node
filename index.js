const http = require('http');

const url = require('url'); //'node:url';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // console.log(req.rawHeaders);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, Wld!</h1>');

  const fs = require('fs/promises');

  async function example() {
    try {
      const myURL = new URL('https://example.org/foo#bar');
      console.log(myURL.href);
      console.log(myURL.hash);
      const content = 'Some MORE AND more content!';
      await fs.writeFile('test.txt', content, { flag: 'a+' }, (err) => {});
    } catch (err) {
      console.log(err);
    }
  }
  example();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
