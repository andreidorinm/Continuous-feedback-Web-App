import React, { useState } from 'react';
import '../screens/signuplogin/screens.scss';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';

function StatisticsScreen() {
  const [chartData, setChartData] = useState({});

  return (
    <>
      <div className="background">
        <div className="light"></div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <div className="circle-three"></div>
        <div className="circle-four"></div>
      </div>
      <h1>
      </h1>
    </>
  );
}

export default StatisticsScreen;
