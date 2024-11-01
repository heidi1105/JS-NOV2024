import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from "react-router-dom"
import DashboardPage from "./views/DashboardPage";
import CreatePage from "./views/CreatePage";
import DetailsPage from "./views/DetailsPage";
import EditPage from "./views/EditPage";

function App() {


  return (
    <div className='container mt-5'>
      <h1>Product Page</h1>
      <p>
      <Link to={"/"}>Home</Link> |
        <Link to={"/products/new"}> Add a new product</Link></p>
      <Routes>
        <Route path="/" element={<DashboardPage />}/> 
        <Route path="/products/new" element={<CreatePage />}/> 
        <Route path="/products/:id" element={<DetailsPage/>}/> 
        <Route path="/products/:id/edit" element={<EditPage />}/> 
      </Routes>
    </div>
  )
}

export default App
