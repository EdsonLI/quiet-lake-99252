/* Teste de versionamento git heroku no ambiente de trabalho */

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express(); /* app object - IMPORTANT */

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
