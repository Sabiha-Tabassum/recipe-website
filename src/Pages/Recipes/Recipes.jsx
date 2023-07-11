import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useLoaderData } from 'react-router-dom';
import './Recipes.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

const Recipes = () => {
    const recipes = useLoaderData();
    //console.log(recipes)
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);

    const { id, chef_name, likes, number_of_recipes, picture, years_of_experience, description, recipe1_name, recipe2_name, recipe3_name, cooking_method1, cooking_method2, cooking_method3, ingredients1, ingredients2, ingredients3, rating1, rating2, rating3 } = recipes

    const handleFavouriteButton1 = () => {
        toast('woow I like the recipe!');
        setClick1(true);
    }

    const handleFavouriteButton2 = () => {
        toast('This one is my favourite');
        setClick2(true);
    }

    const handleFavouriteButton3 = () => {
        toast('My favourite recipe');
        setClick3(true);
    }

    return (
        <Container className='mb-2'>
            <div className='banner text-white'>
                <div className='chef-info'>
                    <h1>Chef: {chef_name}</h1>
                    <h4>Chef Bio: <small>{description}</small> </h4>
                    <p>Number of recipes: {number_of_recipes}</p>
                    <p>Years of experience: {years_of_experience}</p>

                </div>
                <div>
                    <img className='chef-img' src={picture} alt="" />
                </div>

            </div>

            <div className='text-center my-5'>
                <TypewriterComponent options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: ["<h2> Chef's recipes are given below</h2>"]
                }}></TypewriterComponent>

            </div>

            <div>
                <Card style={{ width: '25rem' }} className='card my-4'>
                    <Card.Body>
                        <Card.Title>{recipe1_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-black">Ingredients:</Card.Subtitle>
                        <Card.Text>
                            {
                                ingredients1.map(ingredient => <li>{ingredient}</li>)
                            }
                        </Card.Text>
                        <div>
                            <h6>Cooking Method: <small>{cooking_method1}</small></h6>
                        </div>
                        <div className='d-flex'>
                            <div className='flex-grow-1'>
                                <Button onClick={handleFavouriteButton1}
                                    disabled={click1} variant="secondary">Favourite <FaHeart></FaHeart></Button>
                            </div>

                            <div className='d-flex align-items-center'>

                                <Rating style={{ maxWidth: 100 }} value={rating1} readOnly /><span>{rating1}</span>
                                

                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className='card my-4'>
                    <Card.Body>
                        <Card.Title>{recipe2_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-black">Ingredients:</Card.Subtitle>
                        <Card.Text>
                            {
                                ingredients2.map(ingredient => <li>{ingredient}</li>)
                            }
                        </Card.Text>
                        <div>
                            <h6>Cooking Method: <small>{cooking_method2}</small></h6>
                        </div>
                        <div className='d-flex'>
                            <div className='flex-grow-1'>
                                <Button onClick={handleFavouriteButton2}
                                    disabled={click2} variant="secondary">Favourite <FaHeart></FaHeart></Button>
                            </div>
                            <div className='d-flex align-items-center'>


                            <Rating style={{ maxWidth: 100 }} value={rating2} readOnly /><span>{rating2}</span>
                               
                                

                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className='card my-4'>
                    <Card.Body>
                        <Card.Title>{recipe3_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-black">Ingredients:</Card.Subtitle>
                        <Card.Text>
                            {
                                ingredients3.map(ingredient => <li>{ingredient}</li>)
                            }
                        </Card.Text>
                        <div>
                            <h6>Cooking Method: <small>{cooking_method3}</small></h6>
                        </div>
                        <div className='d-flex'>
                            <div className='flex-grow-1'>
                                <Button onClick={handleFavouriteButton3}
                                    disabled={click3} variant="secondary">Favourite <FaHeart></FaHeart></Button>
                            </div>
                            <ToastContainer />
                            <div className='d-flex align-items-center'>


                            <Rating style={{ maxWidth: 100 }} value={rating3} readOnly /><span>{rating3}</span>
                                
                                

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Recipes;