const Project = require('../../server/models/project');


module.exports = function (router) {
	//GET: the twelve newest standup notes
	router.get('/standup', function (req, res) {

	});

	// POST: create new project
	router.post('/projects', function (req, res) {
		let project = new Project(req.body);
		project.save = function (err, project) {
			if(err) {
				return res.status(400).json(err);
			}
			res.status(200).json(project);
		}
	});
};