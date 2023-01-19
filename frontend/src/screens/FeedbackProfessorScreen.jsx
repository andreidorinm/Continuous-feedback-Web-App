import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function FeedbackProfessorScreen() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [activityTitle, setActivityTitle] = useState('');
  const location = useLocation();
  let activityId = null;

  if (location.state && location.state.activityId) {
    activityId = location.state.activityId;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/activities/${activityId}/feedback`)
      .then((response) => {
        const data = response.data.data;
        setFeedbackData(data);
        // fetching the title of the activity
        axios.get(`http://localhost:5001/api/activities/${activityId}`)
        .then((res) => {
          const activity = res.data.data;
          setActivityTitle(activity.title);
        });
      });
  }, [activityId]);

  // creating an object to hold the counts of each emoji
  let emojiCounts = {};
  feedbackData.forEach((feedback) => {
    if (!emojiCounts[feedback.emoticon]) {
      emojiCounts[feedback.emoticon] = 1;
    } else {
      emojiCounts[feedback.emoticon]++;
    }
  });

  return (
    <>
      <div className="feedback-container">
        <h2>Feedback for activity {activityTitle}</h2>
        <ul>
          {Object.entries(emojiCounts).map(([emoji, count]) => (
            <li key={emoji}>{emoji}: {count}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FeedbackProfessorScreen;
