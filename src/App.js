import React from 'react'


import { Provider } from 'react-redux';
import { store } from 'redux-api/store';
// import react router and Paths for Routes 
import { Routes, Route } from 'react-router-dom';
import { PATHS } from 'common/constants';

//import MUI
import theme from 'theme';
import { ThemeProvider, CssBaseline } from '@mui/material';


// import pages 
import { Home,Auth,Profile,Catalog,Contacts,AboutUs,News ,Error404} from 'pages';



const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Routes>
            <Route path={PATHS.main} element={<Home />} />
            <Route path={PATHS.auth} element={<Auth />}/>
            <Route path={PATHS.profile} element={<Profile />} />
            <Route path={PATHS.catalog} element={<Catalog />} />
            <Route path={PATHS.contacts} element={<Contacts />} />
            <Route path={PATHS.aboutUs} element={<AboutUs />} />
            <Route path={PATHS.news} element={<News />} />
            <Route path={PATHS.notFound} element={<Error404 />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
