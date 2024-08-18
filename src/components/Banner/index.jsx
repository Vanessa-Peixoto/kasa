import "./style.scss";
import propTypes from "prop-types";

function Banner({ image, opacity, title }) {
    return (
        <div
            className="container-banner"
            style={{ backgroundImage: `url(${image})` }}>
            <div
                className="overlay"
                style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
            </div>

            {/* if title exist show h1 */}
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    );
}

Banner.propTypes = {
    image: propTypes.string,
    opacity: propTypes.number,
    title: propTypes.string,
}

export default Banner;
