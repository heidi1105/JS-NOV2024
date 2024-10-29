import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Home from './views/Home';
import About from './views/About';
import LocationSurvey from './views/LocationSurvey';
import LocationPage from './views/LocationPage';

const ErrorPage =()=>{
  return(
    <fieldset>
      <legend>ErrorPage</legend>
      <h1>404 NOT FOUND!</h1>
    </fieldset>
  )
}

function App() {
  return (
    <>
      <h1>Routing Demo</h1>
      <p>
        <Link to={`/`}>Home</Link> | 
        <Link to={`/about`}>About</Link> | 
        <Link to={`/survey`}>Location survey</Link> | 
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/survey" element={<LocationSurvey />} />
        <Route path="/location/:place/:textcolor" element={<LocationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
