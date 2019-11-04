import React, { Component } from 'react';
import {} from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (

      <div>
      <BrowserRouter>
          <div>
              <Route path="/" component={Sidebar} />
                <div id="colorlib-main">
					        <Introduction></Introduction>
					        <About></About>
					        <Timeline></Timeline>
          	    </div>
          </div>
      </BrowserRouter>
  </div>
    );
  }
}

export default App;
