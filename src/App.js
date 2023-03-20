
import './App.css';

import { Header } from './Components/HeaderComponents/Header';
import { Home } from './Components/Home/Home';
import {  Box } from '@mui/material';
// import { HeaderTemp } from './Template/HeaderTemp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailView } from './Components/Details/DetailView';
function App() {
  return (
    <div className="App">  
      <BrowserRouter>
           <Header />
            <Box style={{margin :  '5% auto'}}>
              <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/product/:id" element={ <DetailView />} />
      
              
              </Routes>
            </Box>
            </BrowserRouter>
    </div>
 
  );
}

export default App;
