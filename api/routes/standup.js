const Standup = require ('../../server/models/standup');


module.exports = function (router) {
	//GET: the twelve newest standup notes
	router.get('/standup', function (req, res) {

	});

	//POST: get new meeting note document
	router.post('/standup', function (req, res){
		//bring in the mongoose model
		//Standup is the name of the model
		//note is the mongoose document instance of the standup model
		let note = new Standup(req.body); 
		note.save = function (err, note) {
			//test to see if it works
			if(err) {
				return res.status(400).json(err);
			}
			res.status(200).json(note);
		}
	});
};