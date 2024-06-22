const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/edukativna_platforma', { useNewUrlParser: true, useUnifiedTopology: true });

const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  exercises: Array
});

const Lesson = mongoose.model('Lesson', LessonSchema);

app.get('/lessons', async (req, res) => {
  const lessons = await Lesson.find();
  res.json(lessons);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});