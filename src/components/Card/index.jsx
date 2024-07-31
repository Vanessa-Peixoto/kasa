import propTypes from "prop-types"
import './style.scss'

function Card({title, cover}) {

    return (
        <div className="card-item">
             <img src={cover} alt="location"/>
             <h4>{title}</h4>
        </div>
    )
}

Card.propTypes = {
    title: propTypes.string,
    cover: propTypes.string,
}

export default Card