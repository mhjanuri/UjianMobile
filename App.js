import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/components/MainNavigation';
import reducers from './src/redux/reducers';

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;