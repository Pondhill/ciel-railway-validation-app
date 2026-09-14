const http = require('http');
const port = Number(process.env.PORT || 3000);
const version = process.env.APP_VERSION || 'v2';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    app: 'ciel-railway-validation-app',
    version,
    source: 'github-auto-redeploy',
    path: req.url,
    ok: true
  }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`listening on ${port}, version=${version}`);
});