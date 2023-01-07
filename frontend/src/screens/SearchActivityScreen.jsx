import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const ActivityScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/api/activities')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredData = data.data.filter(activity => activity.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setResults(filteredData);
    if (filteredData.length > 0) {
      navigate(`/activities/${filteredData[0].id}`, { state: { activity: filteredData[0] } });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
      {results.map(result => (
       <div key={result.id} onClick={() => handleClick(result)}>
       {result.title}
     </div>
    ))}
    </form>
  );
}

export default ActivityScreen
