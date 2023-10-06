const express = require('express');
const app = express();
const db = require('./database/database');
const {PORT} = require('./config/config');
const router = require('./routes/routes');

app.use(router);

db();

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});