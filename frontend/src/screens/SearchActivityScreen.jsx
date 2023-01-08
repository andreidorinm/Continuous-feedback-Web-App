import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ActivityScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/activities/search?q=${searchTerm}`)
      .then((response) => {
        setResults(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:5001/api/activities/search?q=${searchTerm}`)
      .then((response) => {
        setResults(response.data.data);
        if (response.data.data.length > 0) {
          navigate(`/activities/${response.data.data[0].id}`, {
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
    navigate(`/activities/${activity.id}`, { state: { activity } });
  };

  return (
    <form className='form-activity' 
    onSubmit={handleSubmit}>
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
  );
};

export default ActivityScreen;
