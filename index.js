const express = require('express');
const app = express();
const path = require('path');
const redditData = require('C:/Users/Lenovo/OneDrive/Desktop/WebDev study/EJS/data.json');

app.use(express.static(path.join(__dirname, 'C:/Users/Lenovo/OneDrive/Desktop/WebDev study/EJS/public ')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Crnjo', 'Brko', 'Sugo'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})