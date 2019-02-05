const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://montpacha:0mm4n1p4dm31@ds221095.mlab.com:21095/omniweek_',
    {
        useNewUrlParser : true
    }
);

app.use(require('./routes'));

app.listen(3000, () => {
    console.log(':) Server started on port 3000')
});