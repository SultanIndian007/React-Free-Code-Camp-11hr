import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Components/App.css';
import Navbar from '../src/Components/Navbar'
import Hero from '../src/Components/Hero'
import Card from '../src/Components/Card'
import reportWebVitals from './reportWebVitals';
import s1 from "./Images/s1.jpeg"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card
      img={s1}
      rating="5.9"
      reviewCount={8}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
