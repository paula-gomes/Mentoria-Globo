const express = require('express');
const route = require('../src/routes/routes');
const app = express();
const bodyParser = require('body-parser');
const methodOverRide = require('method-override');

const port = process.env.PORT || 5000;

app.use('/static', express.static('src/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(methodOverRide(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body ) {
      var method = req.body._method
      delete req.body._method
      return method
    }}
));
app.listen(port, () => console.log('servidor inicializado'));

route(app);

module.exports = app;

