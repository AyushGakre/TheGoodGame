import React, { useState, useEffect } from 'react';
import QuoteCard from './component/QuoteCard';
import SavedQuotesList from './component/SavedQuotesList';

const App = () => {
  const [quote, setQuote] = useState('Click to generate Random Quotes');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [local, setlocal] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };


  useEffect(() => {
    // fetchQuote();
    const savedQuotesFromStorage = localStorage.getItem('savedQuotes');
    if (savedQuotesFromStorage) {
      setSavedQuotes(JSON.parse(savedQuotesFromStorage));
    }
  }, []);

  const saveQuote = () => {
    if(quote === 'Click to generate Random Quotes'){ return null }
    const updatedQuotes = [...savedQuotes, quote];
    setSavedQuotes(updatedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      <SavedQuotesList savedQuotes={savedQuotes} />
    </div>
  );
};

export default App;

