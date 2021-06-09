const express = require('express');
const app = express();
const config = require('./configs/appConfig');
const path = require('path')
app.use(express.json());
const db = require('./models');

db.sequelize.sync()
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res){
    res.send("WELCOME TO JELLYFISH'S NODE JS ASSIGNMENT")
})


app.listen(config.PORT)