import Card from "../../components/Card";

const fakeData = [
    {
        title : 'Log1',
        cover : "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg"
    },
    {
        title : 'Log2',
        cover : "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg"
    },
]

function Home() {

    return(
        <div>
            {fakeData.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    cover={item.cover}
                />
            ))}
        </div>
    )
}

export default Home




console.log('Je suis dans home');
