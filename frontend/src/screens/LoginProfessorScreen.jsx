import React, { useState } from 'react';

function LoginProfessorScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginProfessorScreen;
