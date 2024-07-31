import { Link } from 'react-router-dom'
import './style.scss'

function Error() {
    return (
        <div className='container-error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error