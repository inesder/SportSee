import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, #root{
  height: 100%;
  margin : 0;
  padding: 0;
  min-width: 1024px;
  min-height: 780px; 
  font-family: "Roboto", sans-serif;
}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <SideBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
