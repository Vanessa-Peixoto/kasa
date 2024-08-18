import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.scss'
 
function Header() {

    //get current url and handle navigation
    const location = useLocation()

    return (
        <header>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to="/apropos" className={location.pathname === '/apropos' ? 'active' : ''}>A Propos</Link>
            </nav>
        </header>
    );
}

export default Header