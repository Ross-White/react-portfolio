import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Portfolio from "./components/portfolio";
import Contact from './components/contact';
import CV from './components/cv';
import Footer from './components/footer';


function App() {
  return(

    <Router>
      <Header />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/cv' component={CV} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer />

    </Router>
  );
};

export default App;
