const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.listen(port);

app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page'});
})

app.get('/space', (req, res) => {
    res.render('space', {title: 'Space Page'});
})
