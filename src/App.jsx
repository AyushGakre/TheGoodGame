import React, { useState, useEffect } from 'react';
import QuoteCard from './component/QuoteCard';
import SavedQuotesList from './component/SavedQuotesList';
import { toast, Toaster } from 'sonner';

const App = () => {
  const [quote, setQuote] = useState('Click to generate Random Quotes');
  const [savedQuotes, setSavedQuotes] = useState([]);

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
    if(quote === 'Click to generate Random Quotes')
      { return null 

      }
      const newQuote = { text : quote , date: Date.now()}
    const updatedQuotes = [...savedQuotes,newQuote];
    setSavedQuotes(updatedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
    toast.success('Quote saved successfully!');
  };

  const deleteQuote = (index) => {
    const updatedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(updatedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
    toast.success('Quote deleted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Quotes</h1>
      <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
      <SavedQuotesList savedQuotes={savedQuotes} deleteQuote={deleteQuote} />
      <Toaster/>
    </div>
  );
};

export default App;

