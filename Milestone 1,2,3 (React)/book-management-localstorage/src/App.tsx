import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Pages/Home';
import './App.css'
import ShowBooks from './components/Pages/ShowBooks';
import AddBook from './components/Pages/AddBook';
import Booksdetails from './components/Pages/Booksdetails';
import My404page from './components/Pages/My404page';

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
                 <Home/>
            </Route>
            <Route exact path="/books">
              <ShowBooks />
            </Route>
            <Route exact path="/addbook">
              <AddBook/>
            </Route>
            <Route exact path="/books/:id">
              <Booksdetails/>
            </Route>
            <Route path="*">
              <My404page/>
            </Route>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
