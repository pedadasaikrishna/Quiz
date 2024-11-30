import React from 'react';
import  { createGlobalStyle } from 'styled-components';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Registration from './pages/Registration';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import Rules from './pages/Rules'; // Import the Rules component

// Global styles for night mode
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #e0e0e0;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }
`;
const router=createBrowserRouter([
  
    {
      path : '/',
      element : <Registration />
    },
    {
      path : '/quiz',
      element : <QuizPage />
    },
    {
      path:"/rules",
      element:<Rules />
    },
    {
      path : '/results',
      element : <ResultsPage />
    },
  
])
const App = () => {
  return (
      <>
      <GlobalStyle />
      <RouterProvider router={router}/></>
  );
};

export default App;
