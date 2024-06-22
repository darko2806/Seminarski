import React, { useEffect, useState } from 'react';

const App = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('${process.env.REACT_APP_API_URL}/lessons')
      .then(response => response.json())
      .then(data => setLessons(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Edukativna Platforma za Učenje Programiranja</h1>
      <p className="text-center">Dobrodošli na našu platformu. Ovde možete učiti različite programske jezike kroz interaktivne lekcije i kvizove.</p>
      <div className="row">
        {lessons.map(lesson => (
          <div className="col-md-4" key={lesson._id}>
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
            <a href="#" className="btn btn-primary">Pogledaj lekcije</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;