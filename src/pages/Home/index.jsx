import Card from "../../components/Card";
import Banner from "../../components/Banner";
import './style.scss'
import imgBanner from '../../assets/images/img1.png'

const fakeData = [
    {
        title : 'Charmant apt aux portes de Paris',
        cover : "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg"
    },
]

function Home() {

    return(

        
        <div>
            <Banner imageUrl={imgBanner} opacity={0.7} title="Chez vous, partout et ailleurs"/>

            <div className="container-card">
                {fakeData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </div>

        </div>
            
    )
}

export default Home




console.log('Je suis dans home');
