const Story = require('../models/Story');

// Create a new story
const createStory = async (req, res) => {
  const { language, genre, readerAge, difficulty } = req.body.data.prompt;
  const { result } = req.body.data;
  const newStory = {
    language,
    genre,
    readerAge,
    difficulty,
    title: result.title,
    desc: result.desc,
    user: req.user.id,
  };
  try {
    const story = new Story(newStory);
    const createdStory = await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get stories
const getStories = async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id });
    const publicStories = await Story.find({ public: true });
    res.status(200).json({ stories, publicStories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a story by ID
const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a story
const updateStory = async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Toggle favorite status
const toggleFavorite = async (req, res) => {
  const storyId = req.params.id;
  try {
    const story = await Story.findById(storyId);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    story.fav = !story.fav;
    await story.save();
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Set public status
const setPublicStatus = async (req, res) => {
  const storyId = req.params.id;
  try {
    const story = await Story.findById(storyId);
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }

    story.public = !story.public;
    await story.save();
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a story
const deleteStory = async (req, res) => {
  try {
    const story = await Story.findByIdAndDelete(req.params.id);
    if (!story) {
        return res.status(404).json({ message: 'Story not found' });
    }
    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all stories
const deleteAllStories = async (req, res) => {
  try {
    const result = await Story.deleteMany({});
    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'No stories found to delete' });
    }
    res.status(200).json({ message: 'All stories deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStory,
  getStories,
  getStoryById,
  updateStory,
  deleteStory,
  deleteAllStories,
  setPublicStatus,
  toggleFavorite
};

