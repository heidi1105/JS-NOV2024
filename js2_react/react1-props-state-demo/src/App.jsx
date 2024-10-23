import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieCard from './components/MovieCard'
import StateDemo from './components/StateDemo'

function App() {


  return (
    <>
      <Header />
      <StateDemo />

      {/* Pass props to children component */}
      <MovieCard title="Alien" likes={240} tags={["Scary", "Action"]} rating={8}/>
      <MovieCard title="Barbie" likes={120} tags={["Pink", "Ken"]} rating={9}/>
      <MovieCard title="Quiet Place" likes={80} tags={["Scary", "Quiet"]} rating={7}/>

      <Footer />
    </>
  )
}

export default App
