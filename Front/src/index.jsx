import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideBar from './components/Sidebar';
import ProfilePage from './pages/profilePage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, #root{
  height: 100%;
  margin : 0;
  padding: 0;
  min-width: 1024px;
  min-height: 600px; 
  font-family: "Roboto", sans-serif;
}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
    <Header />
    <SideBar />
    <Routes>
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
