import React from 'react';
import { useLocation } from 'react-router-dom';

const FeedbackScreen = () => {
  const location = useLocation();
  const activity = location.state.activity;

  return (
    <div>
      <h1>{activity.title}</h1>
    </div>
  );
}

export default FeedbackScreen;