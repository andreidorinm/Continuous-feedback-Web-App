import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';

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
          console.log(data);
          setActivityId(activityId);
          setChartData(data);
        });
    }
  }, [activityId]);

  return (
    <>
      <div className="chart">
        <Pie
          data={chartData}
          options={{
            title: {
              display: true,
              text: 'Feedback amount of emoji per activity',
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