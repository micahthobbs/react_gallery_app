import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function MainNav() {
    return(
        <nav class="main-nav">
            <ul>
                <li><a href='#'>Cats</a></li>
                <li><a href='#'>Dogs</a></li>
                <li><a href='#'>Computers</a></li>
            </ul>
      </nav>
    )
}

export default MainNav;