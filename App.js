import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store/store';
import MainRoute from './pages/routes';

function App() {
  return (
    <Provider store={store}>
      <MainRoute />
      <StatusBar style="auto" />
    </Provider>
  );
}

export default App;
