import React, { Component } from 'react';
import menu from '../images/menu.png';
import { Link } from "react-router-dom";

export default class MenuSmall extends Component {

  constructor() {
    super();
    
    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
        <header className="nav p-6 text-white md:hidden">

          <div className="inline-block text-5xl">
            <Link to="/" >
              Joseph Vea
            </Link>
          </div>

          <button onClick={this.showMenu} className="inline-block float-right py-4 w-8 h-8">
            <img src={menu} alt="Menu" />
          </button>

            { this.state.showMenu ? (

              <div className="block">
                <nav className="float-right w-48 mt-2 p-2 bg-teal-700 bg-opacity-75">
                  <a className="block text-3xl text-right" href="https://www.youtube.com/user/hughjafro32" >Watch</a>

                  <a className="block text-3xl text-right" href="https://open.spotify.com/artist/7haTfRcmlhxzWto" >Listen</a>

                  <Link className="block text-3xl text-right" to="/about" >About</Link>

                  <a className="block text-3xl text-right" href="mailto:contact@josephvea.com">Contact</a>
                </nav>
              </div>

            ) : ( null ) }

        </header>
    )
  }
}

