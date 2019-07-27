import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/posts/posts';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div>
      <button>Submit</button>
      <Posts />
    </div>
    </Provider>
    
  );
}

export default App;
