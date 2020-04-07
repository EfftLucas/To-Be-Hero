const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);





    /**
    * Rota / Recurso
    *
    *
    *
    * Método HTTP:
    * 
    * GET: Buscar/listar uma informacao do back-end
    * POST: Criar uma informacao no back-end
    * PUT: Alterar uma informacao no back-end
    * DELETE: Deletar uma informacao no back-end
    */

  /**
   * Tipos de Parâmetros:
   * 
   * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginacão)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo de requisicão, utilizado para criar ou alterar recursos
   */

   /**
    * SQL:MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, ETC
    */
   /**
    * Driver: Select * FROM users
    * QueryBuilder: table('users').select('*').where()
    */


