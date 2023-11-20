import {  BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home'
import './App.css';
import Loader from './Tools/Loader';




function App() {
   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (    
    <div>
      {loading ? (
        <Loader /> // Display Loader component while loading is true
      ) : (
        // Render your main content when loading is complete
        <div className="App">
         <BrowserRouter>
        <Home/> 
        </BrowserRouter>    
        </div>
      )}
    </div>
  );
};
export default App;



