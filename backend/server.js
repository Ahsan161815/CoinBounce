const express = require('express');
const app = express();
const db = require('./database/database');
const {PORT} = require('./config/config');

app.get('/', (req, res, next) => {
    res.send('Hello World!');
})

db();

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});