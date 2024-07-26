import propTypes from "prop-types"

function Card({title, cover}) {

    return (
        <div>
             <img src={cover} alt="logement" height={80} width={80} />
             <h4>{title}</h4>
        </div>
    )
}

Card.propTypes = {
    title: propTypes.string,
    cover: propTypes.string,
}

export default Card