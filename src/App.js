import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {ThemeProvider} from "@material-ui/core";
import lightTheme from './themes/globalLightTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <LandingPage/>
    </ThemeProvider>
  );
}

export default App;
