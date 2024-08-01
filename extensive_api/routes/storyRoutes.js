const express = require('express');
const { createStory, getStories, getStoryById, updateStory, deleteStory } = require('../controller/storyController');

const router = express.Router();

router.post('/', createStory);
router.get('/', getStories);
router.get('/:id', getStoryById);
router.put('/:id', updateStory);
router.delete('/:id', deleteStory);

module.exports = router;
