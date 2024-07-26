import { useParams } from "react-router-dom";

function Location() {
    const idLogement = useParams();
    return(
        <div>
            <h1>Je suis dans le Logement 1</h1>
        </div>
    )
}

export default Location
console.log('je suis dans une page de logement')

