import React, { useState } from 'react';

const usersData = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12"
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234"
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456"
  }
];

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    const user = usersData.find(user => user.email === email);
    if (!user) {
      setUserError('User not found');
      setPasswordError('');
      return;
    }
    if (user.password !== password) {
      setPasswordError('Password Incorrect');
      setUserError('');
      return;
    }
    setTimeout(() => {
      console.log(user);
    }, 3000);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input-email">Email:</label>
        <input
          type="email"
          id="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      {userError && <p id="user-error" style={{ color: 'red' }}>{userError}</p>}
      <div>
        <label htmlFor="input-password">Password:</label>
        <input
          type="password"
          id="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {passwordError && <p id="password-error" style={{ color: 'red' }}>{passwordError}</p>}
      <button id="submit-form-btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
