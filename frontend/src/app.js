import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get('/lessons').then(response => {
      setLessons(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Lessons</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson._id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lessons;