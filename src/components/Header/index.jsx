import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.scss'
 
function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/apropos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header