import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import MessagesPage from './components/MessagesPage';
import GroupsPage from './components/GroupsPage/GroupsPage'
// import Login from './components/Login';
import UserSettings from './components/UserSettings';
import Register from './components/Register';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home/>}  />
          <Route path="/MessagesPage" element={<MessagesPage />} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/GroupsPage" element={<GroupsPage/>} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
