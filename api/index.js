//this file will organize all the routes that will be set up
const express = require ('express');
const router = express.Router();



//require the routes specified in the route folder
require('./routes/standup')(router);
require('./routes/projects')(router);
require('./routes/team')(router);

module.exports = router;