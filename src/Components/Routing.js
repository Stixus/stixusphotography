import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Gallery from './Gallery';
import BW from './BW';
import About from './About';

function Routing() {
  return (
    <div className='Routing'>
        <Router>
            <Switch>
                <Route path='/' exact component={WelcomePage}/>
                <Route path='/gallery' exact component={Gallery}/>
                <Route path='/bw' exact component={BW}/>
                <Route path='/about' exact component={About}/>
            </Switch>
        </Router>
    </div>
  );
}

export default Routing;