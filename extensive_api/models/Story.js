const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
	language: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	readerAge: {
		type: String,
		required: true,
	},
	language: {
		type: String,
		required: true,
	},
	difficulty: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
});


const Story = mongoose.model('Story', storySchema);

module.exports = Story;
