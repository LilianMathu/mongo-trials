const TeamMember = require('../../server/models/teamMember');



module.exports = function (router) {
	//GET: the twelve newest standup notes
	router.get('/team', function (req, res) {
		
	});

	//POST: Create new teamMember
	router.post('/team', function (req, res) {
		let member = new TeamMember(req.body);
		member.save = function (err, team) {
			if(err) {
				return res.status(400).json(err);
			}
			res.status(200).json(team);
		}
	}); 
};