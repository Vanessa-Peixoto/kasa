import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.scss'

function Rating({ rating, totalStars = 5 }) {
    const stars = []

    for (let i = 0; i < totalStars; i++) {
        stars.push(
            <FontAwesomeIcon 
            icon={faStar}
            key={i}
            className={i < rating ? 'star filled' : 'star empty'}
             />
            
        );


    }

    return <div className="rating-container">{stars}</div>
}

export default Rating;