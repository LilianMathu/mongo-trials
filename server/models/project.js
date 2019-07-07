const mongoose = require ('mongoose');

const projectSchema = new projectSchema.mongoose({
    name: {type: String },
    description: { type:String },
    isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Project',projectSchema);
