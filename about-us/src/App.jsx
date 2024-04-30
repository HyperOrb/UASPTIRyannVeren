import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website! We are a team of passionate individuals dedicated to providing...</p>
      <p>Here are some things you can expect from us:</p>
      <ul>
        <li>High-quality products/services</li>
        <li>Excellent customer service</li>
        <li>Continuous improvement</li>
        <li>Transparency</li>
        <li>Community engagement</li>
      </ul>
      <p>Feel free to contact us if you have any questions or feedback!</p>
      <img src={reactLogo} alt="React Logo" />
      <img src={viteLogo} alt="Vite Logo" />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <p>This is the home page content.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
