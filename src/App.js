import {  BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import './App.css';









function App() {
   

  return (    
      <div>
    <BrowserRouter>
    <Home/> 
    </BrowserRouter>
    </div> 
  );
}

export default App;


