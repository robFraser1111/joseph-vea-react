import './App.css';

import React, { Component } from 'react';

import homeBackground from './images/home_background.jpg';
import aboutBackground from './images/about_background.jpg';

import Home from './components/Home';
import About from './components/About';
import Social from './components/Social';
import MenuLarge from './components/MenuLarge';
import MenuSmall from './components/MenuSmall';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      background: homeBackground
    }
    
  }

  componentDidMount() {
    this.backGround();
  }

  backGround = () => {
    if (window.location.pathname === '/about') {
      this.setState({
        background: aboutBackground
      })
    } else {
      this.setState({
        background: homeBackground
      })
    }
  }

  render() {
    return (
      <Router>

        <div className="App bg-no-repeat bg-center" style={{ backgroundImage: `url(${this.state.background})`, backgroundSize: "cover", backgroundColor: '#1e7f86' }}>
          <div className="grid mx-auto px-4 pb-4 pt-2 max-w-screen-lg">

            <MenuLarge />
            <MenuSmall />

            <Switch>
              <Route exact path="/" >
                <Home background={this.backGround} />
              </Route>
              <Route path="/about" >
                <About background={this.backGround} />
              </Route>
            </Switch>

            <footer className="text-center text-white">
              <Social />
              <p className="py-3">Joseph Vea Music (C) 2020, website powered by <a href="https://roo.digital" target="_blank" rel="noreferrer"><u>RooDigital</u></a></p>
            </footer>

          </div>
        </div>

      </Router>
    );
  }
}