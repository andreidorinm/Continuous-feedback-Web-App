import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePopper } from 'react-popper';

const HomeScreen = () => {
  const navigate = useNavigate();
  const studentButtonRef = useRef(null);
  const professorButtonRef = useRef(null);
  const studentPopperRef = useRef(null);
  const professorPopperRef = useRef(null);
  const studentArrowRef = useRef(null);
  const professorArrowRef = useRef(null);
  const [showStudentPopper, setShowStudentPopper] = useState(false);
  const [showProfessorPopper, setShowProfessorPopper] = useState(false);
  const studentPopperStyles = usePopper(
    studentButtonRef.current,
    studentPopperRef.current,
    {
      placement: 'top',
      modifiers: [
        { name: 'arrow', options: { element: studentArrowRef.current } },
      ],
    }
  );
  const professorPopperStyles = usePopper(
    professorButtonRef.current,
    professorPopperRef.current,
    {
      placement: 'top',
      modifiers: [
        { name: 'arrow', options: { element: professorArrowRef.current } },
      ],
    }
  );

  const handleStudentMouseEnter = () => {
    setShowStudentPopper(true);
  };

  const handleStudentMouseLeave = () => {
    setShowStudentPopper(false);
  };

  const handleProfessorMouseEnter = () => {
    setShowProfessorPopper(true);
  };

  const handleProfessorMouseLeave = () => {
    setShowProfessorPopper(false);
  };

  const handleLoginProfessor = () => {
    navigate('/login-professor');
  };

  const handleLoginStudent = () => {
    navigate('/signup');
  };
  return (
    <>
      <div className="home-screen">
        <div className="banner">
          <img src="/feedback.png" alt="Logo" className="logo" />
          <h1 className="title">Feedback App</h1>
        </div>
        <div className="header-text">
          <p className="tagline">
            Easily collect and manage feedback for professors and students
          </p>
        </div>
        <div className="container-buttons">
          <div className="container-student">
            <button
              type="button"
              ref={studentButtonRef}
              className="login-button"
              onMouseEnter={handleStudentMouseEnter}
              onMouseLeave={handleStudentMouseLeave}
              onClick={handleLoginStudent}
            >
              Student
            </button>
          </div>

          <div className="container-professor">
            <button
              type="button"
              ref={professorButtonRef}
              className="login-button"
              onMouseEnter={handleProfessorMouseEnter}
              onMouseLeave={handleProfessorMouseLeave}
              onClick={handleLoginProfessor}
            >
              Professor
            </button>
          </div>
        </div>

        <div className="testimonial">
          <h2>Testimonial:</h2>
          <p>
            "I've been using this app for a few semesters now and it's really
            helped me get valuable feedback from my students. It's easy to use
            and has really improved my teaching."
          </p>
          <p> Professor John Smith</p>
        </div>
        <footer className="footer">
          <div>
            <span>
              <a href="/terms">Terms of Service & Privacy Policy</a>
            </span>
          </div>
        </footer>
      </div>
      <div className="popper-container">
        {showStudentPopper && (
          <div
            className="popper-text-student"
            ref={studentPopperRef}
            style={studentPopperStyles.popper}
            {...studentPopperStyles.popper}
            onMouseEnter={handleStudentMouseEnter}
            onMouseLeave={handleStudentMouseLeave}
          >
            <span>Click me if you are a Student</span>
            <div ref={studentArrowRef} style={studentPopperStyles.arrow} />
          </div>
        )}
        {showProfessorPopper && (
          <div
            className="popper-text-professor"
            ref={professorPopperRef}
            style={professorPopperStyles.popper}
            {...professorPopperStyles.popper}
            onMouseEnter={handleProfessorMouseEnter}
            onMouseLeave={handleProfessorMouseLeave}
          >
            <span>Click me if you are a Professor</span>
            <div ref={professorArrowRef} style={professorPopperStyles.arrow} />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
