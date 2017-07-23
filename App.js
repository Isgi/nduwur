import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigator/AppNavigator';

class App extends Component {
  store = createStore(AppReducer);
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}

export default App;
