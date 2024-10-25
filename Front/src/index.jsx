import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import ProfilePage from './pages/profilePage';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Global styles for the entire application
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: 1024px;
    min-height: 780px;
    font-family: "Roboto", sans-serif;
  }
`;

// Main container for layout, using flex for horizontal alignment
const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

// Container for main content area, including margin for sidebar and header
const MainContent = styled.main`
  margin: 68px 110px 0 110px;
  width: 100%;
`;

// Root rendering of the application with React Router and layout components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle /> {/* Global styles applied */}
      <Header /> {/* Top navigation bar */}
      <AppContainer>
        <SideBar /> {/* Sidebar navigation */}
        <MainContent>
          <Routes>
            {/* Profile page route with dynamic user ID */}
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  </React.StrictMode>
);
