
import logo from '../../Restraunt Website Template/images/logo1.png'
import '../Navbar/Nav.css'
import { Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    
    function show () {
        const menu = document.getElementById("menu")
        menu.style.marginTop="0px"
    }

    function hide () {
        const menu = document.getElementById("menu")
        menu.style.marginTop="-1000px"
    }


    return (
        <header>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='parent-links'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/upComing'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <i class="fa-solid fa-bars"  onClick={show}></i>
                </div>
            </nav>
            <div className='menu' id='menu' >
                    <Link to='/'onClick={hide}>Home</Link>
                    <Link to='/products' onClick={hide}>Products</Link>
                    <Link to='/upComing' onClick={hide}>About</Link>
                    <Link to='/contact' onClick={hide}>Contact</Link>
                    <i class="fa-solid fa-xmark" id='xmark' onClick={hide}></i>
            </div>
        </header>
    )
}

export default Nav