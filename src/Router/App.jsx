import React from 'react';

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <i>
            <Link to="/register">Register</Link>
          </i>
          <i>
            <Link to="/login">Login</Link>
          </i>
          <i>
            <Link to="/home">Home</Link>
          </i>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/register" component={Register} />

            <Route path="/login" component={Login} />
            <Route path="/home">
              <center>
                <Home/>
              </center>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
