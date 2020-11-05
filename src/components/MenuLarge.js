import React from 'react'

import {
    Link
  } from "react-router-dom";

export default function MenuLarge() {
    return (
        <header className="App-header hidden md:flex">

            <nav className="nav">
              <ul>
                <li className="inline-block px-6 text-4xl hover:text-orange-400 transition duration-200 ease-in-out">
                  <a href="https://www.youtube.com/user/hughjafro32" >Watch</a>
                </li>
                <li className="inline-block px-6 text-4xl hover:text-orange-400 transition duration-200 ease-in-out">
                  <a href="https://open.spotify.com/artist/7haTfRcmlhxzWto" >Listen</a>
                </li>
                <li className="logo inline-block px-6 text-6xl hover:text-orange-400 transition duration-200 ease-in-out">
                  <Link to="/" >Joseph Vea</Link>
                </li>
                <li className="inline-block px-6 text-4xl hover:text-orange-400 transition duration-200 ease-in-out">
                  <Link to="/about" >About</Link>
                </li>
                <li className="inline-block px-6 text-4xl hover:text-orange-400 transition duration-200 ease-in-out">
                  <a href="mailto:contact@josephvea.com">Contact</a>
                </li>
              </ul>
            </nav>

          </header>
    )
}
