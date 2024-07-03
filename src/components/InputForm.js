import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ setQuotes }) {
  const [limit, setLimit] = useState(1);
  const [minLength, setMinLength] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `https://api.quotable.io/quotes/random?limit=${limit}`;
      if (minLength) url += `&minLength=${minLength}`;
      if (maxLength) url += `&maxLength=${maxLength}`;
      if (keywords) url += `&tags=${keywords.split(' ').join('|')}`;

      const response = await axios.get(url);
      if (limit === 1) {
        setQuotes([response.data]);
      } else {
        setQuotes(response.data);
      }
    } catch (error) {
      console.error("Error fetching quotes", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>
        Number of Quotes:
        <input 
          type="range" 
          min="1" 
          max="50" 
          value={limit} 
          onChange={(e) => setLimit(e.target.value)} 
        />
        {limit}
      </label>
      <label>
        Min Length:
        <input 
          type="number" 
          value={minLength} 
          onChange={(e) => setMinLength(e.target.value)} 
        />
      </label>
      <label>
        Max Length:
        <input 
          type="number" 
          value={maxLength} 
          onChange={(e) => setMaxLength(e.target.value)} 
        />
      </label>
      <label>
        Keywords:
        <input 
          type="text" 
          value={keywords} 
          onChange={(e) => setKeywords(e.target.value)} 
        />
      </label>
      <button type="submit">Get Quotes</button>
    </form>
  );
}

export default InputForm;
