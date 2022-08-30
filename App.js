
import './App.css';

import React from 'react';
import Nav from './News24/Nav';
import Spinner from './News24/Spinner';
import News from './News24/News';
import NewsItem from './News24/Newsitem';




function App ()  {
  

 

    return (
      <>
        <div>
        
        
       
       
        <Spinner/>
        <News/>
        <NewsItem/>
        <Nav/>
          
        </div>
        </>
    )
  }

  export default App;

