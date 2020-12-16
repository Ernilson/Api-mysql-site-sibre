module.exports = app => {

  //Atenticação
  app.get('/getAll', app.api.users.getAllUsers)
  app.post('/signup', app.api.users.gravar)  
  app.post('/signin', app.api.auth.signin)
  
  // Cadastro
  app.route('/contato')  
  //.all(app.config.passport.authenticate())
  .post(app.api.contato.save)
  .get(app.api.contato.getAll)

  app.route('/getById/:id')
  .get(app.api.contato.getById)

  app.route('/update/:id')
  //.all(app.config.passport.authenticate())
  .put(app.api.contato.put)

  app.route('/contato/:id')
  .delete(app.api.contato.del) 
  // --------------------------------------
  // Tabela Oração
  app.route('/oracao')  
  //.all(app.config.passport.authenticate())
  .post(app.api.oracao.save)
  .get(app.api.oracao.getAll)
 
}