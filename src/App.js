import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topnav from './nav/top';
import Sidenav from './nav/side';
import Summary from './reports/Summary';
import Tracker from './reports/Tracker';
import Profile from './reports/Profile';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Topnav></Topnav>
      <Sidenav></Sidenav>
      <main>
        <Routes>
          <Route path="*" element={<Summary />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
