
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const port = 8800;

router
  .get('/contato', (ctx, next) => {
      ctx.body = (`
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
    })
  .post('/contato', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = `Post contato. <a href='/'>Voltar</a>`
  })
  .get('/', (ctx, next )=> {
    ctx.body = (`
      <h3>Home</h3>
      <a href='/contato'>Contato</a>
    `)
  });

app.use(router.routes());

app.listen(port, _ => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
