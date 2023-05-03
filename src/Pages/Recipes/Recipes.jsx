import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import './Recipes.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const recipes = useLoaderData();
    //console.log(recipes)
    const { id, chef_name, likes, number_of_recipes, picture, years_of_experience, description, recipe1_name, recipe2_name, recipe3_name, cooking_method1, cooking_method2, cooking_method3, ingredients1, ingredients2, ingredients3, rating1, rating2, rating3 } = recipes

    const handleFavouriteButton = () => {
        toast('woow I like the recipe')
    }

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

            <div className='text-center my-5'>
                <h2> Chef's recipes are given below</h2>
            </div>

            <div>
                <Card style={{ width: '50rem' }} className='card my-4'>
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
                                <Button onClick={handleFavouriteButton} variant="secondary"><FaHeart></FaHeart></Button>
                            </div>
                            
                            <div>
                                <Rating
                                    placeholderRating={rating1}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span>{rating1}</span>

                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '50rem' }} className='card my-4'>
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
                                <Button onClick={handleFavouriteButton} variant="secondary"><FaHeart></FaHeart></Button>
                            </div>
                            <div>
                                <Rating
                                    placeholderRating={rating2}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span>{rating2}</span>

                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '50rem' }} className='card my-4'>
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
                                <Button onClick={handleFavouriteButton} variant="secondary"><FaHeart></FaHeart></Button>
                            </div>
                            <ToastContainer />
                            <div>
                                <Rating
                                    placeholderRating={rating3}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>

                                </Rating>
                                <span>{rating3}</span>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Recipes;