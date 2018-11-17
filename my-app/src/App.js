// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Projects } from './Projects';
import { About } from './About';
import { Homepage } from './Homepage';
import { Jumbotron } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
              
              <div className="container">
              <Jumbotron>
              <img src= "https://cdn.pixabay.com/photo/2018/01/16/10/29/waters-3085701__480.jpg" alt = "watery place"/>
              
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/projects">Projects</Link>
                { ' ' }
                <Link to="/about">About</Link>
                </Jumbotron>
                <Route exact path="/" component={ Homepage } />
                <Route path="/projects" component={ Projects } />
                <Route path="/about" component={ About } />
              </div>
            </Router>
            );
    }
}

export default App;

