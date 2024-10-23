const Header = () => {
    const headingStyle = {
        backgroundColor: "rebeccapurple",
        color: "white"
    }

    return (
        <fieldset>
            <legend>Header.jsx</legend>
            <h4 style={headingStyle}>Component demo</h4>
            <p style={{ color: "red" }}>Warning!!!</p>
            <button className='btn'>Test</button>
        </fieldset>
    )
}

export default Header