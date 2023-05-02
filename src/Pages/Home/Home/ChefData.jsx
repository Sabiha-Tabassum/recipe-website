import React from 'react';
import { Button, Card, Container, } from 'react-bootstrap';
import './chefData.css';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefData = ({ recipeInfo }) => {
    console.log(recipeInfo)
    const {id, chef_name, likes, number_of_recipes, picture, years_of_experience } = recipeInfo
    return (
        <Container className='mb-2'>

            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <h6>Number of recipes: {number_of_recipes}</h6>
                    <h6>Years of experience:{years_of_experience}</h6>
                    <div className='d-flex'>
                        <p className='flex-grow-1'><FaThumbsUp />  {likes}</p>

                       <Link to={`/recipes/${id}`}><Button variant="light" className='text-success'>View Recipes</Button></Link> 
                    </div>

                </Card.Body>
            </Card>

        </Container>
    );
};

export default ChefData;