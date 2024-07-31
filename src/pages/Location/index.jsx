import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow"

const images = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
]

function Location() {
    const idLogement = useParams();
    return(
        <div>
            <h1>Je suis dans le Logement 1</h1>
            <Slideshow images={images}/>
        </div>
    )
}

export default Location
console.log('je suis dans une page de logement')

