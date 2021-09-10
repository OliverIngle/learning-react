//import react
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//import views
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Joke from './Components/Joke';

//import components
import Header from './Components/Header';
import Footer from './Components/Footer';

//App
function App() {

  return (
    //Parent element
    <div>

      {/*Router*/}
      <Router>

        {/*Header*/}
        <Header />

        {/*Switch for different views*/}
        <Switch>

          {/*Home route*/}
          <Route exact path="/">
            <Home />
          </Route>

          {/*About route*/}
          <Route path="/about">
            <About />
          </Route>
          {/*Contact route*/}
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>

      </Router>

      {/*footer*/}
      <Footer />

    </div>
  );
}

//export
export default App;
