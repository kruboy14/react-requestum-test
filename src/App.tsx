import React from 'react';
import { Header } from './components/Header';
import 'normalize.css';
import { Home } from './pages/Home';
import dotenv from 'dotenv'

dotenv.config()

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
