const express = require('express');
const cors = require('cors')
const itemsRouter = require('./itemsRouter.js');

const app = express();

app.use(express.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

app.use(itemsRouter);

app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});