import './style.scss'

function Banner({image, opacity, title}) {
    return (
        <div className="container-banner" style={{backgroundImage: `url(${image})`}}>
            <div className="overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}></div>
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    )
}

export default Banner