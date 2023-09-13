import './App.css'
import Footer from "./components/Footer";
import {  BrowserRouter,  Routes, Route, }  from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DevPage from './components/DevPage';
import itemlist from './assets/developerlist.js'
import { useState } from 'react';
import { Sidebar } from "primereact/sidebar";
import {Link} from 'react-router-dom';
function App() {
  const [visible , setVisible]=useState(false);
  const [items,setItems] = useState(itemlist);
return (
  <div className='bg-gradient-to-br from-green-400 via-blue-600 to-transparent'>
  <BrowserRouter>
  <Header setVisible={setVisible}/>
  <Sidebar
  visible={visible}
  position="right"
  onHide={() => setVisible(false)}>
  <div className='flex flex-col gap-7 items-center'>
  <Link to='/' onClick={()=>setVisible(false)}><div className=" hover:underline ">Home</div></Link>
  <Link to='/' onClick={()=>setVisible(false)}><div className=" hover:underline ">Contacts</div></Link>
  </div>

  </Sidebar>
  <Routes>
  
   <Route path='/' element={<Home/>} /> 
   <Route path='/devdetails/:id' element={<DevPage items={items}/>}/>
    
  </Routes>
  <Footer/>
  </BrowserRouter>
  </div>
  );
}

export default App;
