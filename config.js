const env = process.env;

const config2 = {
  //não funciona!
  //meu exemplo
  db: {
    user: 'elias',
    password: '25061987',
    database: 'freedbtech_language',
    host: 'localhost',
    connectionLimit: 10,
    port: 3306, //inclusão elias 16/12/2020
  }, //multipleStatements: true outro exemplo 12/2020
};

const config = {
  //funciona
  //do tutorial
  db: {
    // não exponha a senha ou qualquer informação sensível, feito apenas para demo
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'elias',
    password: env.DB_PASSWORD || '25061987',
    database: env.DB_NAME || 'freedbtech_language',
    //connectionLimit: 10,
    //port: 3306, //inclusão elias 16/12/2020
    //multipleStatements: true outro exemplo 12/2020
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config; //padrão
