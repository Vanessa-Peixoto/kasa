import star from '../../assets/images/star.png'
import './style.scss'

function Rating({ rating, totalStars = 5 }) {
    const stars = []

    for (let i = 0; i < totalStars; i++) {
        stars.push(
            <img
                key={i}
                src={star}
                alt="Star"
                className={i < rating ? 'star filled' : 'star empty'}
            />
        );
    }

    return <div className="rating-container">{stars}</div>
}

export default Rating;