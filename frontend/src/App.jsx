import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import SearchActivityScreen from './screens/SearchActivityScreen';
import FeedbackScreen from './screens/FeedbackScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/activities" element={<SearchActivityScreen />} />
        <Route path="/activities/:id" element={<FeedbackScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;