import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupStudentScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5001/api/students/signup-student',
        {
          name,
          email,
          password,
        }
      );
      setSuccess(res.data.data);
      navigate('/login-student');
      setError(null);
    } catch (err) {
      setError(err);
      setSuccess(null);
    }
  };
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
              <span className="text-login">Name</span>
              <input
                className="input-login"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
          </div>
          <div className="input-container">
            <label className="label-login">
              <span className="text-login">Email</span>
              <input
                className="input-login"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
          {error && <p>{error.message}</p>}
          {success && <p>{success}</p>}
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

export default SignupStudentScreen;