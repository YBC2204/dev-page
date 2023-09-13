import Logo from '../assets/Programming-amico.png';
import {Link} from 'react-router-dom';
const Header =(setVisible) =>
{

return(
  <div>
<div className="flex text-black h-25 w-full p-5">
    <img src={Logo} className='w-24 '/>  
    <button className="flex items-center justify-end w-full sm:hidden" onClick={()=> setVisible(true)}><span className="pi pi-bars"></span></button>
<div className='hidden sm:flex justify-end items-end font-dms text-2xl  w-full gap-10'> 
<Link to='/'><div className=" hover:underline ">Home</div></Link>
<Link to='/'><div className="  hover:underline ">Contact</div></Link>
 
 
</div>

</div>

</div>
 
);

}

export default Header;

