import React, {useState} from 'react'

const StateDemo = () => {
    /*
        count: state variable
        setCount: function to update the state variable
    */
    const [count, setCount] = useState(0);    

    const alertMe = () =>{
        alert("Hi, me!");
    }

    const alertSomeone = (name)=>{
        alert(`Hi, ${name}`);
    }

    return (
        <fieldset>
            <legend>StateDemo.jsx</legend>
            <button onClick={() => alert("Hi!")}> Alert Hi </button>
            <button onClick={alertMe}>Alert Me!</button>
            <button onClick={()=> alertSomeone("Pepper")}>Alert Pepper</button>
            <input type="text" name="title" onChange={(e)=> console.log(e.target.type)}/>

            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Add count</button>
            <button onClick={()=>setCount((prevState)=> prevState - 1)}>Minus count</button>
            {
                count > 10? <p>It's larger than 10</p>: <p>Click more</p>
            }
        </fieldset>
    )
}

export default StateDemo