import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import SearchActivityScreen from './screens/SearchActivityScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HomeScreen from './screens/HomeScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/terms" element={<TermsOfServiceScreen />} />
        <Route path="/login-professor" element={<LoginScreen />} />
        <Route path="/signup" element={<LoginScreen />} />
        <Route path="/activities" element={<SearchActivityScreen />} />
        <Route path="/activities/:id" element={<FeedbackScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;