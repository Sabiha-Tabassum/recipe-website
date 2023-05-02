import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import ChefData from './Home/ChefData';




const Home = () => {
    const chefData = useLoaderData();
    console.log(chefData)
    return (
        <div>
            <div className='mt-5'>
                {
                    chefData.map(data => <ChefData
                    key = {data.id} 
                    recipeInfo={data}></ChefData>

                    )
                }
            </div>

        </div>
    );
};

export default Home;