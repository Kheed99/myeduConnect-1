import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
