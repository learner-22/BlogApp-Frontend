import { NavLink } from "react-router-dom"

const NavBar =(props) =>{
    return(
        <div>
        {props.user &&  <span>  Hello, {props.user.username} !! </span> } 
        
        <nav class="navbar navbar-expand-lg bg-light">
           
            <ul className = 'nav'>
            <li className = 'nav-item'> <NavLink  className = 'nav-link' to = '/home'> Home </NavLink> </li>
            <li className = 'nav-item'> <NavLink className = 'nav-link' to = '/about'> About </NavLink> </li>
            <li className = 'nav-item'> <NavLink className = 'nav-link' to = '/'> Login </NavLink> </li>
            </ul>
        </nav>
        </div> 
    )
}

export default NavBar