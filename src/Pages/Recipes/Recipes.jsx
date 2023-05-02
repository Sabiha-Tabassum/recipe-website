import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Recipes.css';

const Recipes = () => {
    const recipes = useLoaderData();
    //console.log(recipes)
    const { chef_name, likes, number_of_recipes, picture, years_of_experience, description, recipe1_name, recipe2_name, recipe3_name, cooking_method1, cooking_method2, cooking_method3 } = recipes
    return (
        <Container className='mb-2'>
            <div className='banner text-white'>
                <div className='chef-info'>
                    <h4>Chef: {chef_name}</h4>
                    <p>Chef Bio: <small>{description}</small> </p>
                    <p>Number of recipes: {number_of_recipes}</p>
                    <p>Years of experience: {years_of_experience}</p>

                </div>
                <div>
                    <img className='chef-img' src={picture} alt="" />
                </div>

            </div>

            <div className='card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{recipe1_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            <h6>Cooking Method: <small>{cooking_method1}</small></h6>
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{recipe2_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            <h6>Cooking Method: <small>{cooking_method2}</small></h6>
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{recipe3_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            <h6>Cooking Method: <small>{cooking_method3}</small></h6>
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Recipes;