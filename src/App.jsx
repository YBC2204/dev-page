import './App.css'
//import {  BrowserRouter,  Routes,  Route, Link  }  from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
function App() {
return (
  <div className='bg-gradient-to-br from-green-400 via-blue-600 to-transparent'>
  <Header/>
  <Home/>
  </div>
  );
}

export default App;
