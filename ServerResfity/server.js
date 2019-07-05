const restify = require('restify');
const port = 8000;

const server = restify.createServer();

server.get('/', (req, res) => {
  res.send('Resposta para o root');
});

server.listen(port, _ => {
  console.log(`Servidor up na porta ${port}.`);
})