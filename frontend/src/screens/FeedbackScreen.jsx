import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Image from 'react-bootstrap/Image';

const FeedbackScreen = () => {
  const location = useLocation();
  const activity = location.state.activity;
  const [emoticon, setEmoticon] = useState('smiley'); // set initial emoticon value
  const [professorName, setProfessorName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Make an API request to get the professor's information
    axios
      .get(`http://localhost:5001/api/professors/${activity.professorId}`)
      .then((response) => {
        // Set the professorName state variable to the value of the name field in the response data
        setProfessorName(response.data.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [activity]); // Only re-run the effect when the activity changes

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission action (page refresh)
    axios
      .post(`http://localhost:5001/api/activities/${activity.id}/feedback`, {
        activityId: activity.id,
        emoticon: emoticon,
      })
      .then((response) => {
        console.log(response);
        navigate('/feedback'); // redirect to a different page on successful submission
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{activity.title}</h1>
      <h2>Professor: {professorName}</h2>
      <div className="emoji-container">
        <div className="section">
          <div
            className={emoticon === 'smiley' ? 'emoji active' : 'emoji'}
            onClick={() => setEmoticon('smiley')}
          >
            <Image src="/smiley.png" className="emoji-image" />
          </div>
          <div
            className={emoticon === 'frowny' ? 'emoji active' : 'emoji'}
            onClick={() => setEmoticon('frowny')}
          >
            <Image src="/frowny.png" className="emoji-image" />
          </div>
        </div>
        <div className="section">
          <div
            className={emoticon === 'surprised' ? 'emoji active' : 'emoji'}
            onClick={() => setEmoticon('surprised')}
          >
            <Image src="/surprised.png" className="emoji-image" />
          </div>
          <div
            className={emoticon === 'confused' ? 'emoji active' : 'emoji'}
            onClick={() => setEmoticon('confused')}
          >
            <Image src="/confused.png" className="emoji-image" />
          </div>
        </div>
      </div>
      <button type="submit">
        <span className="text-send">Send Feedback</span></button>
    </form>
  );
};

export default FeedbackScreen;
