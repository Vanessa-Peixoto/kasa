import logo from '../../assets/images/logo-footer.png'
import './style.scss'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer