import React from 'react';
import { toast, Toaster } from 'sonner';

const SavedQuotesList = ({ savedQuotes, deleteQuote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Quotes List</h2>
      <ul>
        {savedQuotes.map((quote, index) => (
          <div>
          <p className=' font-mono font-bold'>
          {new Date(quote.date).toLocaleString()}
          </p>
          <li key={index} className="mb-2 bg-slate-300 p-2 rounded">
            {quote.text}
            
          </li>
          <button
            className="bg-red-500 text-white font-serif px-2 py-1 rounded-2xl mb-4"
              onClick={() => 
                deleteQuote(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotesList;
