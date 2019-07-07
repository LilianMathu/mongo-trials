const mongoose = require ('mongoose');

//create a schema
const standupSchema = new mongoose.Schema({
    teamMember: { type: String },
    project: { type: String },
    workYesterday: { type: String },
    workToday: { type: String },
    impediment: { type: String },
    createdOn: { type: Date, default: Date.now }
});

//create a model
module.exports = mongoose.model('Standup', standupSchema);


