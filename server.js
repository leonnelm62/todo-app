let express = require('express');

let app = express()

app.get('/', function (req, res) {
    res.send('Bonjour et bienvenue');
})

app.listen(3000)