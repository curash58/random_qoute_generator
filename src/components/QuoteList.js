import React from 'react';
import Quote from './Quote';

function QuoteList({ quotes }) {
  return (
    <div className="quote-list">
      {quotes.map((quote, index) => (
        <Quote key={index} quote={quote} />
      ))}
    </div>
  );
}

export default QuoteList;
