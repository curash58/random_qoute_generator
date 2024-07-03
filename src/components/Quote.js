import React from 'react';

function Quote({ quote }) {
  return (
    <div className="quote">
      <p>{quote.content}</p>
      <h4>- {quote.author}</h4>
    </div>
  );
}

export default Quote;
