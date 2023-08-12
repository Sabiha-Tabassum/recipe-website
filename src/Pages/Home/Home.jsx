import React, { useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import './Home.css';
import ChefData from './Home/ChefData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';






const Home = () => {
    const chefData = useLoaderData();
    console.log(chefData)
    useEffect(()=>{
       Aos.init({duration:2000})
    },[])

    return (
        <Container className=''>
            <section className='margin'>
                <div className='bg text-white'>
                    <h2 className='title'>Chinese Recipes <br /> For Everyone</h2>
                    <div className='bg-text'>
                        <h4 className='p'>At foodies, we take food seriously then everything else. <br /> We come up with weekly recipes of  every <br /> kind of food to fulfill your cravings.</h4>
                    </div>


                </div>
            </section>

            <section>
                <div className='text-center my-5'>
                    <TypewriterComponent options={{
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        strings: ["<h2>Meet With Our Talented Head Chefs</h2>"]
                    }}></TypewriterComponent>

                </div>
                <div className='mt-5 chef-card'>
                    {
                        chefData.map(data => <ChefData
                            key={data.id}
                            recipeInfo={data}></ChefData>

                        )
                    }
                </div>
            </section>



            <section>
                <div className='text-center my-5'>
                    <TypewriterComponent options={{
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        strings: ["<h2>Popular Item in the Town</h2>"]
                    }}></TypewriterComponent>
                </div>

                <Carousel className='mt-4'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/mXhzkYz/food-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Fried Rice</h3>
                            <p>Most popular Chinese item.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://i.ibb.co/3yqzy0M/food-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Chinese Fast Food</h3>
                            <p>People of Bangladesh like these item.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/ZN8hPHL/food-3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Miso Soup</h3>
                            <p>
                                Popular item in china.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='position-relative'>

                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/yWz16Bc/food-4.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption className='position-absoulute top-0 start-0'>
                            <h3>Hot Sour Soup</h3>
                            <p>
                                Popular item all over the world.
                            </p>
                        </Carousel.Caption>

                    </Carousel.Item>
                </Carousel>
            </section>


            <section>
                <div  className='mt-5 mb-5 d-flex align-items-center '>
                    <div className=''>
                        <img className='img' data-aos="zoom-in" src="https://i.ibb.co/MVJBP3t/cook-book.jpg" />
                    </div>
                    <div className='ms-5 advertise' data-aos="fade-left">
                        <h4 className='addtext'>Our Cook Book Will Soon be <br /> Available in Departmental Stores <br /> Accross the Country.</h4>

                    </div>
                </div>
            </section>




        </Container>
    );
};

export default Home;