import React from 'react';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="banner">
        <img src="/feedback.png" alt="Logo" className="logo" />
        <h1 className="title">Feedback App</h1>
      </div>
      <p className="tagline">
        Easily collect and manage feedback for professors and students
      </p>
      <div className="container-buttons">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>


      <div className="testimonial">
        <h2>Testimonial:</h2>
        <p>
          "I've been using this app for a few semesters now and it's really
          helped me get valuable feedback from my students. It's easy to use and
          has really improved my teaching."
        </p>
        <p> Professor John Smith</p>
      </div>
      <footer className="footer">
        <ul>
          <span>
            <a href="/terms">Terms of Service & Privacy Policy</a>
          </span>
        </ul>
      </footer>
    </div>
  );
};

export default HomeScreen;
