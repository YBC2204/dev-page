import Logo from '../assets/Programming-amico.png';
import {Link} from 'react-router-dom';
const Header =() =>
{

return(
  <div>
<div className="flex text-black h-25 w-full p-5">
    <img src={Logo} className='w-24 '/>  

<div className='flex justify-end items-end font-dms text-2xl  w-full gap-10'> 
<Link to='/'><div className=" hover:underline ">Home</div></Link>
<div className="  hover:underline ">Contact</div>
 
 
</div>

</div>

</div>
 
);

}

export default Header;

