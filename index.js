const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

consign()  
    //.include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')   
    .into(app)

app.db = db

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
