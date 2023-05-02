import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import ChefData from './Home/ChefData';




const Home = () => {
    const chefData = useLoaderData();
    console.log(chefData)
    return (
        <Container>
            <div className='bg text-white'>
                <h2 className='title'>Chinese Recipes <br /> For Everyone</h2>
                <h4 className='bg-text'>At foodies, we take food seriously then everything else. <br /> We come up with weekly recipes of  every <br /> kind of food to fulfill your cravings.</h4>
            </div>
            <div className='mt-5 '>
                {
                    chefData.map(data => <ChefData
                    key = {data.id} 
                    recipeInfo={data}></ChefData>

                    )
                }
            </div>

        </Container>
    );
};

export default Home;