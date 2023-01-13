import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProfessorScreen() {
  const location = useLocation();
  const { professorId } = location.state;
  const [professor, setProfessor] = useState({});

  useEffect(() => {
    if (professorId) {
      axios
        .get(`http://localhost:5001/api/professors/${professorId}`)
        .then((response) => {
          setProfessor(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [professorId]);

  return (
    <>
      <h1>Welcome, {professor.name}</h1>
      <div className="container-activities">
        <div className="list-activities"></div>
      </div>
    </>
  );
}

export default ProfessorScreen;
