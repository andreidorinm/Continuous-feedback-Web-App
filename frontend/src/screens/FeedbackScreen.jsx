import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const FeedbackScreen = () => {
  const location = useLocation();
  const activity = location.state.activity;
  const [emoticon, setEmoticon] = useState('smiley'); // set initial emoticon value

  const handleSubmit = () => {
    axios.post(`http://localhost:5001/api/activities/${activity.id}/feedback`, {
      emoticon: emoticon
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>{activity.title}</h1>
      <button onClick={handleSubmit}>Send Feedback</button>
      <select value={emoticon} onChange={event => setEmoticon(event.target.value)}>
        <option value="smiley">😀</option>
        <option value="frowny">😞</option>
        <option value="surprised">😮</option>
        <option value="confused">😕</option>
      </select>
    </div>
  );
}

export default FeedbackScreen;
