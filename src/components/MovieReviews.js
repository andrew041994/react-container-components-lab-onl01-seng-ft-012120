import React from 'react';

const MovieReviews = props => <div className="review-list" >
                                 <ul> 
                                   
                                    {props.reviews.map(movie => <li key={movie.headline}> {movie.display_title} </li>)}
                                </ul>
                            </div>

export default MovieReviews
