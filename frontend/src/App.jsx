import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import SearchActivityScreen from './screens/SearchActivityScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import FeedbackSuccessScreen from './screens/FeedbackSuccessScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/activities" element={<SearchActivityScreen />} />
        <Route path="/activities/:id" element={<FeedbackScreen />} />
        <Route path="/feedback" element={<FeedbackSuccessScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;