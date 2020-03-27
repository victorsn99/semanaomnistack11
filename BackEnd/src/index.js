const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * Tipos de parametros:
 * 
 * query params: parametros enviados na rota após "?" (filtros, paginação)
 * 
 * route params: parametros utilizados para identificar recursos 
 * 
 * request body: corpo da requisição (criar/alterar recursos)
 */

 /**
  * formas de se comunica com banco de dados
  * 
  * Driver: SELECT * FROM users
  * Query builder: table('users').select('*')
  */

app.listen(3333);