import { NavLink } from "react-router-dom"

const NavBar =() =>{
    return(
        <nav>
            <ul className = 'nav'>
            <li className = 'nav-item'> <NavLink  className = 'nav-link' to = '/home'> Home </NavLink> </li>
            <li className = 'nav-item'> <NavLink className = 'nav-link' to = '/about'> About </NavLink> </li>
            <li className = 'nav-item'> <NavLink className = 'nav-link' to = '/'> Login </NavLink> </li>
            </ul>
        </nav>
       
    )
}

export default NavBar