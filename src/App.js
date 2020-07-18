import React from 'react';
import './App.css';
import Profile from './profile/Profile'

const App = () => {
    const handleName = e => {
      e.preventDefault();
      alert("Bounhas aziz");
    }
  return <Profile fullname=" click to see full name" bio="i love music" profession="Programmer" handleName={handleName} >
    <img src='./assets/profilePhoto.png' alt="profilePhoto" />
    </Profile>
  };
export default App
