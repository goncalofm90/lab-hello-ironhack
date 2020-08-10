import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="menubar">
          <p class="ironlogo"><img src="images/ironhack-logo.svg" alt=""/></p>
          <p class="ironmenu"><img src="images/menu-top.svg" alt=""/></p>
          </div>

          <div class="jumbotron">
          <h1>Say hello to<br></br> ReactJS</h1>
          <p>You will learn a Frontend<br></br>
             framework from scratch, to <br></br>
             become a Ninka Developer.</p>
             <a href="">Awesome!</a>
          </div>
        
          <div class="components">
            <div class="mini">
              <img src="images/icon1.png" alt=""/>
              <h4>Declarative</h4>
              <p>React makes it<br></br> painless to create<br></br> interactive UIs.</p>
            </div>
            <div class="mini">
              <img src="images/icon2.png" alt=""/>
              <h4>Components</h4>
               <p>Build encapsulated<br></br> components that<br></br> manage their state.</p>
            </div>
            <div class="mini">
              <img src="images/icon3.png" alt=""/>
              <h4>Single-way</h4>
               <p>A set of immutable<br></br> values are passed to<br></br> the components.</p>
            </div>
            <div class="mini">
              <img src="images/icon4.png" alt=""/>
              <h4>Jsx</h4>
               <p>Statically-typed,<br></br> designed to run on<br></br> modern browsers.</p>
            </div>
          </div>
          

          
        </header>
      </div>
    );
  }
}

export default App;
