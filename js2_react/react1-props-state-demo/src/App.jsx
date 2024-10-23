import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieCard from './components/MovieCard'

function App() {
  const headingStyle = {
    backgroundColor : "rebeccapurple",
    color: "white"
  }

  return (
    <>
      <Header />
      <h1 style={headingStyle}>Props demo</h1>
      <p style={{color: "red"}}>Warning!!!</p>
      <button className='btn'>Test</button>

      {/* Pass props to children component */}
      <MovieCard title="Alien" likes={240} tags={["Scary", "Action"]} rating={8}/>
      <MovieCard title="Barbie" likes={120} tags={["Pink", "Ken"]} rating={9}/>
      <MovieCard title="Quiet Place" likes={80} tags={["Scary", "Quiet"]} rating={7}/>

      <Footer />
    </>
  )
}

export default App
