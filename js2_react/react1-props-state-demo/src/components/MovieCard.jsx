import React from 'react'

const MovieCard = (props) => {
    const {title, likes, tags} = props;
    return (
        <fieldset>
            <legend>MovieCard.jsx</legend>
            <h1>Title: {title} </h1>
            <h5>Likes: {likes}</h5>
            <h5>Hashtags:</h5>
            <ul>
                {
                    tags.map(eachTag => {
                        return <li>#{eachTag}</li>
                    })
                }
            </ul>
            <h5>Rating: {props.rating}</h5>
        </fieldset>
    )

}

export default MovieCard