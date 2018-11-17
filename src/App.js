import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

//Root Component
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDRR-df3lP2oaNzHcVXahZm49Xypa2GD4k',
      authDomain: 'manager-15404.firebaseapp.com',
      databaseURL: 'https://manager-15404.firebaseio.com',
      projectId: 'manager-15404',
      storageBucket: 'manager-15404.appspot.com',
      messagingSenderId: '407652175130'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <LoginForm />
      </Provider>
    );
  }
}

export default App;
