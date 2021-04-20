import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements.jsx";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/e">
                    <h1>Manticore</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/CheatManager">CheatManager</NavLink>
                    <NavLink to="/Jailbreak">Jailbreak</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Discord</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
