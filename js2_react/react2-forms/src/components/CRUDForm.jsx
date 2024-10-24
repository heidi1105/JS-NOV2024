// 1. import useState
import React, { useState } from 'react'

const CRUDForm = () => {
    // 2. initialize the state variables
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const [icecreamList, setIcecreamList] = useState([
        {flavor: "Jasmine", quantity: 2, isReady: true},
        {flavor: "Watermelon chocolate chip", quantity: 3, isReady: false},
        {flavor: "Mint Chocolate chip", quantity: 1, isReady: true}
    ])

    const clearForm =()=>{
        setFlavor("Vanilla");
        setQuantity(0);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // by default, newIcecream will have false isReady
        const newIcecream = {flavor,quantity, isReady: false };
        addIcecreamToList(newIcecream);

        clearForm();

    }

    // CREATE
    const addIcecreamToList = (newIcecream) =>{
        // Add the new icecream info to the list 
        setIcecreamList([...icecreamList, newIcecream]); // push without .push
    }

    // DELETE
    const removeIcecreamByIdx = (deleteIdx)=>{
        const filteredList = icecreamList.filter((eachIcecream, idx)=> idx !== deleteIdx)
        setIcecreamList(filteredList)
    }

    return (
        <fieldset>
            <legend>CRUDForm.jsx</legend>
            <h2>Icecream store (No validation)</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} onChange={e=> setFlavor(e.target.value)}/>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={e=> setQuantity(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            
            <p>Flavor: {flavor} | Quantity: {quantity}</p>

            <table>
                <thead>
                    <tr>
                        <th>Flavor</th>
                        <th>Quantity</th>
                        <th>Ready?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        icecreamList.map((eachIcecream, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td>{eachIcecream.flavor}</td>
                                    <td>{eachIcecream.quantity}</td>
                                    <td>{eachIcecream.isReady?"True":"False"}</td>
                                    <td>
                                        <button onClick={()=>removeIcecreamByIdx(idx)}>Delete {idx}</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </fieldset>
    )
}

export default CRUDForm