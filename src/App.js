// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Navbar from './components/inc/Navbar';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';


// function App() {

//   return (

//     // <Router>
//     //   <div>
//     //     <Navbar />
        
//     //       <Route path="/">
//     //         <Home />
//     //       </Route>

//     //       <Route path="/about">
//     //         <About />
//     //       </Route>

//     //       <Route path="/contact">
//     //         <Contact />
//     //       </Route>
        
//     //   </div>
//     // </Router>




//   );
// }


// export default App;


import './App.css';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";

function App()  {
  
    return (
      <> 
      <Router>
        <Routes/>
      </Router>
      </>
      
    );
  }


export default App;