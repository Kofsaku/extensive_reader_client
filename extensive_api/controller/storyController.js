const Story = require('../models/Story');

// Create a new story
const createStory = async (req, res) => {
  console.log("req.bodyreq.body", req.body)
  const { language, genre, readerAge, difficulty } = req.body.data.prompt;
  const { result } = req.body.data;
  const newStory = {
    language,
    genre,
    readerAge,
    difficulty,
    story: result
  }
  try {
    const story = new Story(newStory);
    const createdStory = await story.save();
    console.log("createdStorycreatedStory", createdStory)
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all stories
const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
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

module.exports = {
  createStory,
  getStories,
  getStoryById,
  updateStory,
  deleteStory,
};
