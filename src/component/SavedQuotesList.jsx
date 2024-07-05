import React from 'react';


const SavedQuotesList = ({ savedQuotes, deleteQuote }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Quotes List</h2>
      <div className=' max-h-80 overflow-y-auto'>
      <ul>
        {savedQuotes.map((quote, index) => (
          <div>
          <p className=' font-mono font-bold'>
          {new Date(quote.date).toLocaleString()}
          </p>
          <li key={index} className="mb-2 bg-slate-300 p-2 rounded ">
            {quote.text}
            
          </li>
          <button
            className=" mb-4 select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => 
                deleteQuote(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default SavedQuotesList;
