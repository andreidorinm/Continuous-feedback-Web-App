import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignupProfessorScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { register, handleSubmit, formState: { errors }} = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    // Send a request to the server to authenticate the user
    authenticate(username, password).then((response) => {
      if (response.success) {
        // If the authentication is successful, redirect the user to the homepage
        window.location.replace('/');
      } else {
        // If the authentication fails, show an error message
        alert('Incorrect username or password');
      }
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
        <span className="text-title">Welcome Professor</span>
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
          <div className="input-container">
            <label className="label-login">
              <span className="text-login">Confirm Password</span>
              <input
                className="input-login"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div className="button-submit">
            <button type="submit">
              <span className="button-text">Sign up</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupProfessorScreen;
