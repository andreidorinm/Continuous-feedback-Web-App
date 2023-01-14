import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchActivityScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { studentId } = location.state;
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5001/api/students/${studentId}`).then((response) => {
      setStudent(response.data.data);
    });
    axios
      .get(`http://localhost:5001/api/activities/search?q=${searchTerm}`)
      .then((response) => {
        setResults(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm], [studentId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:5001/api/activities/search?q=${searchTerm}`)
      .then((response) => {
        setResults(response.data.data);
        if (response.data.data.length > 0) {
          navigate(`/activity/${response.data.data[0].id}`, {
            state: { activity: response.data.data[0] },
          });
          location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (activity) => {
    navigate(`/activity/${activity.id}`, { state: { activity } });
  };

  return (
    <>
      <div className="background">
        <div className="light"></div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <div className="circle-three"></div>
        <div className="circle-four"></div>
      </div>
      <h1>
        <span className="text-title">Welcome {student.name}</span>
      </h1>
      <h2>
        <span className="text-subtitle">Please search for an activity</span>
      </h2>
      <div className="form-container">
        <form className="form-activity" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="input"
              type="text"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="list-activities-container">
            {results.length > 0 && searchTerm !== '' && (
              <div className="list-activities">
                {results.map((result) => (
                  <div
                    className="activity"
                    key={result.id}
                    onClick={() => handleClick(result)}
                  >
                    {result.title}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="button-submit">
            <button type="submit">
              <span className="search-text">Search</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchActivityScreen;
