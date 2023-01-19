import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import SearchActivityScreen from './screens/SearchActivityScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HomeScreen from './screens/HomeScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';
import LoginProfessorScreen from './screens/signuplogin/LoginProfessorScreen';
import LoginStudentScreen from './screens/signuplogin/LoginStudentScreen';
import SignupStudentScreen from './screens/signuplogin/SignupStudentScreen';
import SignupProfessorScreen from './screens/signuplogin/SignupProfessorScreen';
import ProfessorScreen from './screens/ProfessorScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import FeedbackProfessorScreen from './screens/FeedbackProfessorScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/terms" element={<TermsOfServiceScreen />} />
        <Route path="/login-student" element={<LoginStudentScreen />} />
        <Route path="/login-professor" element={<LoginProfessorScreen />} />
        <Route path="/signup-student" element={<SignupStudentScreen />} />
        <Route path="/signup-professor" element={<SignupProfessorScreen />} />
        <Route path="/professors/:id" element={<ProfessorScreen />} />
        <Route path="/activities/:id" element={<SearchActivityScreen />} />
        <Route path="/activity/:id" element={<FeedbackScreen />} />
        <Route path="/activities/:id/feedback" element={<FeedbackProfessorScreen />} />

        

    </Routes>
    </BrowserRouter>
  );
}

export default App;