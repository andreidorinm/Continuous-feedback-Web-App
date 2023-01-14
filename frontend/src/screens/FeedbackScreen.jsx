import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Modal from '../components/ModalFeedback';
import ModalFeedback from '../components/ModalFeedback';

const FeedbackScreen = () => {
  const location = useLocation();
  const activity = location.state.activity;
  const [emoticon, setEmoticon] = useState('smiley'); // set initial emoticon value
  const [professorName, setProfessorName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize isModalOpen state variable

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
      .post(`http://localhost:5001/api/activities/${activity.id}`, {
        activityId: activity.id,
        emoticon: emoticon,
      })
      .then((response) => {
        console.log(response);
        setIsModalOpen(true)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <ModalFeedback show={isModalOpen} onHide={() => setIsModalOpen(false)} />
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
        <button className='button-feedback' type="submit" onClick={() => setIsModalOpen(true)}>
          <span className="text-send">Send Feedback</span>
        </button>
      </form>
    </>
  );
};

export default FeedbackScreen;
