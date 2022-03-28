import express from 'express';

const app = express();
const port = 5000;


// set templating engine
app.set('view engine', 'ejs');
//where the templates are stored
app.set('views', 'view');
// public folder location
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// Routing
app.get('/', index)



function server() {
    console.log('The server is running succesfully! at https://http://localhost:5000/');
}

function index(res){
    res.render('index')
}




app.listen(port, server)