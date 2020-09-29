const dotenv   = require('dotenv');
const express  = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.options('*', cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    next();
});

app.use('/api/webs', require('./routes/web'));

app.use('*', (req, res) => {
    res.status(404).send({ status: 404, code: 1001, err: '404 Not Found'});
});

app.listen(process.env.PORT || 3000);