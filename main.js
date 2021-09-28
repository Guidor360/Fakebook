const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./config/db');
const {v4 : uuidv4} = require('uuid');
require('dotenv').config()

//middlewares
app.use(cors());
app.use(express.json());
app.set('view-engine', 'ejs')

//Routes
app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/login', (req, res) => {
    res.render('login.ejs')
});

app.get('/register', (req, res) => {
    res.render('register.ejs')
});
app.post('/register', (req, res) => {
    pool.query(
    `INSERT INTO users (id_uuid, username, password) VALUES('${uuidv4()}', ?,?)`,
    (err,res) => {
        console.log(err)
        pool.end()
    }
    );
})


app.all('*', (req,res) => {
    res.sendStatus(404);
})


//App Connection
app.listen(3001, (req, res) => {
    console.log('server listening')
})