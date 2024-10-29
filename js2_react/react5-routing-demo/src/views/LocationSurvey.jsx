import React, { useState } from 'react'
//1.  import 
import { useNavigate } from 'react-router-dom';

const LocationSurvey = () => {
    const [location, setLocation] = useState("");
    const [color, setColor] = useState("");

    //2. initialize the navigate 
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        // redirect users to "/location/tokyo/red"
        // 3. use it!
        navigate(`/location/${location}/${color}`);

    }

    return (
        <fieldset>
            <legend>LocationSurvey</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Location: </label>
                    <input type="text" name="location" value={location}
                        onChange={e => setLocation(e.target.value)} />
                </p>
                <p>
                    <label>Color: </label>
                    <input type="text" name="color" value={color}
                        onChange={e => setColor(e.target.value)} />
                </p>
                <button type='submit'>Submit</button>
            </form>
                <button type='button' onClick={()=>navigate(-1)}>Back</button>

        </fieldset>
    )
}

export default LocationSurvey