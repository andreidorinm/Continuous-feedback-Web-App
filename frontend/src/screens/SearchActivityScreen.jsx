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
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit" >
          Search
        </button>
      {results.length > 0 && searchTerm !== '' && (
        <ul>
          {results.map((result) => (
            <li key={result.id} onClick={() => handleClick(result)}>
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default ActivityScreen;
