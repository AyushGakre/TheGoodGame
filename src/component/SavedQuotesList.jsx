import React from 'react';

const SavedQuotesList = ({ savedQuotes, deleteQuote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Quotes List</h2>
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index} className="mb-2 flex justify-between items-center bg-gray-50 p-2 rounded">
            {quote}
            <button
              onClick={() => deleteQuote(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedQuotesList;
