const express = require('express');

const app = express();
require('./db/connect')();

app.use(express.json());

app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
