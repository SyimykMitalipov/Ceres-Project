import React from 'react'


import { Provider } from 'react-redux';
import { store } from 'redux-api/store';
// import react router 
import { Routes, Route } from 'react-router-dom';


//import MUI
import theme from 'theme';
import { ThemeProvider, CssBaseline } from '@mui/material';


// import pages 
import Home from 'pages/Home/Home';



const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
