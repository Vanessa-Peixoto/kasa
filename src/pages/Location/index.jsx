import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import Slideshow from "../../components/Slideshow"
import Collapse from '../../components/Collapse'
import Tag from "../../components/Tag"
import Rating from "../../components/Rating"
import './style.scss'


function Location() {

    const { id } = useParams();
    const [location, setLocation] = useState(null)
    const [isNotFound, setIsNotFound] = useState(false)

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const foundLocation = data.find(location => location.id === id)
                if(foundLocation) {
                    setLocation(foundLocation)
                } else {
                    setIsNotFound(true)
                }
            })
            .catch(error => {
                console.error('Error fetching logement data:', error)
                setIsNotFound(true)
            })
    }, [id])

    if (isNotFound) {
        return < Navigate to="/404" replace />
    }

    if (!location) {
        return <div>Loading...</div>;
    }

    return(
        <div className="wrapper">
            <Slideshow images={location.pictures}/>

            <div className="container-info">
                <div>
                    <h1>{location.title}</h1>
                    <p>{location.location}</p>
                    <div className="tags-container">
                    {location.tags.map((tag, index) => (
                        <Tag key={index} name={tag} />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="container-info-host">
                        <p>{location.host.name}</p>
                        <div className="image-cropper">
                            <img src={location.host.picture} alt="host" className="rounded"></img>
                        </div>
                    </div>
                    <div>
                        <Rating rating={location.rating} />
                    </div>
                </div>
            </div>

            
            <div className="container-description">
                <Collapse title="Description"> 
                    {location.description}
                </Collapse>
                
                <Collapse title="Equipements"> 
                    <ul>
                        {location.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div> 
        </div>
    )
}

export default Location


