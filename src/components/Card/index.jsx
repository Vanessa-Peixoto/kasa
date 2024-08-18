import propTypes from "prop-types";
import './style.scss';
import { Link } from "react-router-dom";

function Card({id, title, cover}) {
    return (
        //redirect to location detail page
        <Link to={`/location/${id}`} className="card-link">
            <article className="card-item">
                <img src={cover} alt="location"/>
                <h4>{title}</h4>
            </article>
        </Link>
    );
}

Card.propTypes = {
    id: propTypes.string,
    title: propTypes.string,
    cover: propTypes.string,
}

export default Card