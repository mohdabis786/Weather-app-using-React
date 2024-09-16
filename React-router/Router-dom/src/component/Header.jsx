import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
            <a href="#">Logo</a>
            <nav style={{height:40,backgroundColor:"black"}}>
                <ul style={{display:"flex",justifyContent:"space-evenly",color:"white",textDecorationLine:"none"}}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
