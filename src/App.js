import React, { useState } from 'react';
import InputForm from './components/InputForm';
import QuoteList from './components/QuoteList';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <InputForm setQuotes={setQuotes} />
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default App;
