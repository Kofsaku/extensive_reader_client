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
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	public: {
		type: Boolean,
		required: false,
	},
	fav: {
		type: Boolean,
		required: false,
	}
});


const Story = mongoose.model('Story', storySchema);

module.exports = Story;
