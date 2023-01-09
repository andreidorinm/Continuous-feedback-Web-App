import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignupStudentScreen = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (formData) => {
    const { email, password, confirmPassword } = formData;

    // You can add your own validation logic here
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // You can make an API call to create a new user here
    // For the purpose of this example, let's just redirect the user to the login page
    navigate('/login');
  };

  return (
    <div className="signup-screen">
      <h1>Sign Up</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          {...register('email', { required: true })}
        />
        {errors.email && <p className="error-message">This field is required</p>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register('test', { required: true })}
        />
        {errors.password && <p className="error-message">This field is required</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          {...register('test', { required: true })}
        />
        {errors.confirmPassword && <p className="error-message">This field is required</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupStudentScreen;
