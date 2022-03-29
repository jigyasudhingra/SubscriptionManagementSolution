import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import RootLayout from './Screens/RootLayout';
import Boot from './Boot';

const App: React.FC = () => {
  Boot().then(() => { });
  return (
      <MuiThemeProvider theme={Theme}>
        <RootLayout />
      </MuiThemeProvider>
  );
};

export default App;
