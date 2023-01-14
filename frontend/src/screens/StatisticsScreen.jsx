import React, { useState, useEffect } from 'react';
import '../screens/signuplogin/screens.scss';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

function StatisticsScreen() {
  const [chartData, setChartData] = useState({});
  const [activity, setActivityId] = useState({});
  const location = useLocation();
  let activityId = null;

  if (location.state && location.state.activityId) {
    activityId = location.state.activityId;
  }
  useEffect(() => {
    if (activityId) {
      axios
        .get(`http://localhost:5001/api/activities/${activityId}/feedback`)
        .then((response) => {
          const data = response.data.data;
          setFeedback(response.data.data);
          setActivityId(activityId);

          let activityTitles = [];
          let feedbackCounts = {};
          data.forEach((feedback) => {
            const activityId = feedback.activityId;
            if (!activityTitles.includes(activityId)) {
              activityTitles.push(activityId);
              feedbackCounts[activityId] = 1;
            } else {
              feedbackCounts[activityId]++;
            }
          });
          // set chart data
          setChartData({
            labels: activityTitles,
            datasets: [
              {
                label: 'Number of feedbacks',
                data: Object.values(feedbackCounts),
                backgroundColor,
              },
            ],
          });
        });
    }
  }, [activityId]);

  return (
    <>
      <div className="background">
        <div className="light"></div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <div className="circle-three"></div>
        <div className="circle-four"></div>
      </div>
      <h1></h1>
      <div
        className="activity"
        key={activity.id}
        onClick={() => setActivityId(activity.id)}
      >
        {activity.title}
      </div>
      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Feedbacks per activity',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    </>
  );
}

export default StatisticsScreen;
