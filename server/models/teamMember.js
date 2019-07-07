const mongoose = require ('mongoose');

const teamMembersSchema = new mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('TeamMember', teamMembersSchema);
