import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import SearchActivityScreen from './screens/SearchActivityScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HomeScreen from './screens/HomeScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';
import LoginProfessorScreen from './screens/LoginProfessorScreen';
import LoginStudentScreen from './screens/LoginSTudentScreen';
// import SignupStudentScreen from './screens/SignupStudentScreen';
// import SignupProfessorScreen from './screens/SignupProfessorScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/terms" element={<TermsOfServiceScreen />} />
        <Route path="/login-student" element={<LoginStudentScreen />} />
        <Route path="/login-professor" element={<LoginProfessorScreen />} />
        {/* <Route path="/signup-student" element={<SignupStudentScreen />} />
        <Route path="/signup-professor" element={<SignupProfessorScreen />} /> */}

        <Route path="/activities" element={<SearchActivityScreen />} />
        <Route path="/activities/:id" element={<FeedbackScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;