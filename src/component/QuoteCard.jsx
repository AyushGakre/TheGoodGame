import React from 'react';

const QuoteCard = ({ quote, fetchQuote, saveQuote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
      <p className="text-xl mb-4 font-mono">{quote}</p>
      <button
        onClick={fetchQuote}
        className="bg-black text-white px-4 py-2 rounded-2xl mr-2 hover:bg-slate-700"
      >
        New Quote
      </button>
      <button
        onClick={saveQuote}
        className="bg-black text-white px-4 py-2 rounded-2xl"
      >
        Save Quote
      </button>
    </div>
  );
};

export default QuoteCard;
