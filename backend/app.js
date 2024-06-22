const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/edukativna_platforma';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});