
const http = require('http');
const port = 8008;
const ip = 'localhost';

const server = http.createServer((req, res) => {
  console.log('Request recebida.');
  
  if (req.url == '/')
    res.end('Home');

    /* como organizar servidor http para as rotas */

  res.end('Resposta default.');
});

server.listen(port, ip, _ => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
  console.log('Ctrl + c para derrubar o servidor.');
});
