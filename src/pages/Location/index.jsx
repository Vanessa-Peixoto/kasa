import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Slideshow from "../../components/Slideshow"
import Collapse from '../../components/Collapse'
import Tag from "../../components/Tag"
import Rating from "../../components/Rating"

const images = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
]

const data = {
    rating: 4
};

function Location() {
    const { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const foundLocation = data.find(location => location.id === id);
                setLocation(foundLocation);
            })
            .catch(error => console.error('Error fetching logement data:', error));
    }, [id]);

    if (!location) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <Slideshow images={images}/>
            <Tag name="Spacieux"/>
            <Rating rating={data.rating} />
            <Collapse title="Description"> {location.description}
            </Collapse>
            <Collapse title="Equipements"> 
                <ul>
                    {location.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    )
}

export default Location
console.log('je suis dans une page de logement')

