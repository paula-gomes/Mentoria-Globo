const express = require ('express');
const route= require('./routes');
const app = express();
const bodyParser = require ('body-parser');

const port = 3000;

app.use('/static', express.static('src/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => console.log('servidor inicializado'));

route(app);

module.exports = app;

