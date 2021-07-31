import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Portfolio from "./components/portfolio";
import Contact from './components/contact';
import CV from './components/cv';
import Footer from './components/footer';


function App() {
  return(

    <Router basename='/about'>
      <Header />

      <Router>
        <Route path='/about' component={About} />
      </Router>

      <Router>
        <Route path='/portfolio' component={Portfolio} />
      </Router>

      <Router>
        <Route path='/cv' component={CV} />
      </Router>

      <Router>
        <Route path='/contact' component={Contact} />
      </Router>

      <Footer />

    </Router>
  );
};

export default App;
