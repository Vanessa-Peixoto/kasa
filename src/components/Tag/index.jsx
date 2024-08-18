import './style.scss';
import propTypes from "prop-types";

function Tag({ name }) {

    return(
        <span>{name}</span>
    );
}

Tag.propTypes = {
    name: propTypes.string,
}

export default Tag