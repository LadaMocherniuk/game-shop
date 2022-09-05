import React from 'react';
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";
import { Provider } from 'react-redux';
import { store } from './components/redux';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
