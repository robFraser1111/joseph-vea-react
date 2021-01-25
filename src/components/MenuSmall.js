import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default class MenuSmall extends Component {

  render() {
    return (
        <header className="nav p-6 text-white md:hidden">

          <div className="text-4xl flex justify-between">

            <div>
              <Link to="/" onClick={this.props.closeMenu}>
                Joseph Vea
              </Link>
            </div>

            <div>
              <FontAwesomeIcon icon={faBars} onClick={this.props.toggleMenu}/>
            </div>
          
          </div>

            { this.props.showMenu ? (

              <div className="block">
                <nav className="float-right w-48 mt-2 p-2 bg-teal-700 bg-opacity-75">
                  <a className="block text-3xl text-right" href="https://www.youtube.com/user/hughjafro32">Watch</a>

                  <a className="block text-3xl text-right" href="https://open.spotify.com/artist/7haTfRcmlhxzWto" >Listen</a>

                  <Link className="block text-3xl text-right" to="/about" onClick={this.props.closeMenu}>About</Link>

                  <a className="block text-3xl text-right" href="mailto:contact@josephvea.com">Contact</a>
                </nav>
              </div>

            ) : ( null ) }

        </header>
    )
  }
}

