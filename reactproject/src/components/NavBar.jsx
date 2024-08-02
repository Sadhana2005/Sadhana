import React from "react";
import {Link} from "react-router-dom";
const NavBar = () =>{
   return <nav>
        <li><Link to ='/home'>Home</Link></li>
        <li><Link to ='/about'>About</Link></li>
        
        
    </nav>
}
export default NavBar;