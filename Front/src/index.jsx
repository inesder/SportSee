import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals