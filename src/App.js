import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import './App.css';
import HomePage from "./pages/HomePage"; 
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div className="main h-full">
    <BrowserRouter>
        <nav className="bg-gray-800">
          <div className="container mx-auto p-2">
            <Link to="/"><h2 className="text-white  bg-black text-center font-bold p-2" >E-Commerce</h2></Link>
          </div>
        </nav>
        <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="edit/:id" element={<EditPage/>} />
        </Routes>
        </div>
        <ToastContainer />
        </BrowserRouter>
      </div>
  );
}

export default App;
