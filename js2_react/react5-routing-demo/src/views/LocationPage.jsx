import React from 'react'
import { useParams } from 'react-router-dom'

const LocationPage = () => {
    const {place, textcolor} = useParams(); 
    // useParams will return an object with all the keys from the path from App.jsx

    return (
        <fieldset>
            <legend>LocationPage.jsx </legend>
            <h1 style={{color: textcolor}}>You have searched for {place}</h1>
        </fieldset>
    )
}

export default LocationPage