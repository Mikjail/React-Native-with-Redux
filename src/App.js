import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBkg6ui1EyI1rVQqovurHvMrtxFrihMpmw',
    authDomain: 'manager-f5722.firebaseapp.com',
    databaseURL: 'https://manager-f5722.firebaseio.com',
    projectId: 'manager-f5722',
    storageBucket: '',
    messagingSenderId: '969301315664'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
