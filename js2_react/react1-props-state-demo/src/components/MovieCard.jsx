// state1: import useState
import React, {useState} from 'react'

const MovieCard = (props) => {
    const {title, likes, tags} = props;

    // state2: Initialize the state variable
    const [currentLikes, setCurrentLikes] = useState(props.likes);

    return (
        <fieldset style={currentLikes > 100? {backgroundColor: "Pink"}:{backgroundColor: "white"} }>
            <legend>MovieCard.jsx</legend>
            <h1>Title: {title} </h1>
            <h5>Likes: {currentLikes}</h5>
            <h5>Hashtags:</h5>
            <ul>
                {
                    tags.map((eachTag, idx) => {
                        return <li key={idx}>#{eachTag}</li>
                    })
                }
            </ul>
            <h5>Rating: {props.rating}</h5>

            {/* State3: update state variable */}
            <button onClick={()=>setCurrentLikes(currentLikes+1)}>Like!</button>
        </fieldset>
    )

}

export default MovieCard