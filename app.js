import express from 'express';
import ejs from 'ejs';
import * as path from 'path';

const app = express();
const port = 5000;


// set templating engine
app.set('view engine', 'ejs');
//where the templates are stored
app.set('views', 'views');

// public folder location
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// Routing
app.get('/', index)
app.get('/scanner', scanner)





function server() {
    console.log('The server is running succesfully! at https://http://localhost:5000/');
}

function index(req, res) {
    res.render('index')
}

function scanner(req, res) {
    res.render('scanner')
}

app.listen(port, server)