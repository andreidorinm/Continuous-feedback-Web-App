import React, { useState } from 'react';
import './screens.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function LoginStudentScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
    return axios.post('http://localhost:5001/api/students/login-student', {
        email: username,
        password: password
    })
      .then((response) => {
        if (response.data.data.id) {
          const studentId = response.data.data.id;
          console.log(studentId);
          navigate(`/activities/${studentId}`, {state: { studentId }});
        } else {
          alert('Incorrect username or password');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
        <span className="text-title">Welcome Student</span>
      </h1>
      <div className="form-login-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="label-login">
              <span className="text-login">Email</span>
              <input
                className="input-login"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
          <div className="input-container">
            <label className="label-login">
              <span className="text-login">Password</span>
              <input
                className="input-login"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <span>Don't have an account?</span>
          <Link className="link-signup" to="/signup-student" replace>
            <span className="text-signup">Sign up here</span>
          </Link>
          <div className="button-submit">
            <button type="submit">
              <span className="button-text">Log in</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginStudentScreen;
