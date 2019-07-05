const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>Home</h1>
    <a href="/contato">Contato</a>
  `);
})

app.get('/contato', (req, res) => {
  res.send(`
    <h1>Contato</h1>
    <form action='/contato' method='POST'>
      <label for='email'>Email:</label>
      <input type='email' name='email' id='email'>

      <label for='message'>Mensagem:</label>
      <textarea name='message' id='message'></textarea> 

      <input type='submit' value='Enviar'>
    </form>
    <a href='/'>Voltar</a>
  `);
});

app.post('/contato', (req, res) => {
  res.send('Post /contato. <a href="/">Voltar</a>');
});

app.listen(port, _ => {
  console.log(`Servidor iniciado na porta ${port}`);
})