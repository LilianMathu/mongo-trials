const express = require('express');
const morgan = require('morgan');   //logger
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');   //api routes

const app = express();   //create an instance of the express app

app.set('port', (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('static'));
app.use(morgan('dev'));
app.use('/api', api);
app.use((req, res) => {
	const err = new Error('Not found');
	err.status = 404;
	res.json(err);
});

//add mongodb connection later

app.listen(app.get('port', ()=> {
	console.log('API server listening on port ' + app.get);
}));