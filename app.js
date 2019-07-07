const express = require('express');
const morgan = require('morgan');   //logger
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('../../server/api');   //api routes 

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

// mongodb connection 

const mongoose = require('mongoose');

//connect to mongoose ;  virtualstandups is the name of the database
mongoose.connect('mongodb://localhost:27017/virtualstandups', { useNewUrlParser: true });

//reference to the mongoose.connection
const db = mongoose.connection;

//check for connection errors
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('connected to mongoDB');
	app.listen(app.get('port', () => {
	   console.log('API server listening on port ' + app.get('port') + '!');
	}));
});