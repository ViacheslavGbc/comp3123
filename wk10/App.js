import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./components/student"
import College from "./components/college"

function App() {
  return (
    <>
      <Student name="Ivan Petroff" number="5726958" enrolled="2"/>
      <Student name="Peter Sidoroff" number="75649" enrolled="1"/>
      <Student name="Sinata Hoyo" number="967369" enrolled="3"/>
      <College name="George Brown College" location="Casa Loma Campus" />      
    </>
  );
}

export default App;
