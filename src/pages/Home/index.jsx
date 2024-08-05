import Card from "../../components/Card";
import Banner from "../../components/Banner";
import './style.scss'
import imgBanner from '../../assets/images/img1.png'
import { useState, useEffect } from "react";



function Home() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    if (!data) {
        return <div>Loading...</div>
    }

    return(

        
        <div className="wrapper">
            <Banner image={imgBanner} opacity={0.7} title="Chez vous, partout et ailleurs"/>

            <section className="container-card">
                {data.map(item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </section>

        </div>
            
    )
}

export default Home




console.log('Je suis dans home');
