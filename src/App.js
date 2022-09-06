import React from 'react';
import HomePage from "./components/home/HomePage";
import Header from "./components/header/Header";
import { Provider } from 'react-redux';
import { store } from './components/redux';
import GamePage from './components/game-page/GamePage';
import {
  Routes,
  Route,
} from "react-router-dom";
import OrderPage from './components/order-page/OrderPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
