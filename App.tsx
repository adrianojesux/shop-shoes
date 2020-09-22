import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import Routes from './src/routes';
import Store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
