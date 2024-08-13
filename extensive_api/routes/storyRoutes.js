const express = require('express');
const { createStory, getStories, getStoryById, updateStory, deleteStory, deleteAllStories, setPublicStatus, toggleFavorite  } = require('../controller/storyController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createStory);
router.get('/', auth, getStories);
router.get('/:id', auth, getStoryById);
router.put('/:id', auth, updateStory);
router.delete('/:id', auth, deleteStory);
router.delete('/stories', auth, deleteAllStories);
router.patch('/setPublicStatus/:id', auth, setPublicStatus);
router.patch('/toggleFavorite/:id', auth, toggleFavorite);

module.exports = router;
