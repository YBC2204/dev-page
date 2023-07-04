import './App.css'
import Footer from "./components/Footer";
import {  BrowserRouter,  Routes, Route, }  from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DevPage from './components/DevPage';
function App() {
return (
  <div className='bg-gradient-to-br from-green-400 via-blue-600 to-transparent'>
  <BrowserRouter>
  <Header/>
  <Home/>
  <Routes>
   <Route path='/ggg' element={<Home/>} /> 
   <Route path='/devdetails' element={<DevPage/>} /> 
  </Routes>
  <Footer/>
  </BrowserRouter>
  </div>
  );
}

export default App;
