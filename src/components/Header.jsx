import {Logo} from '../assets/coding.svg';
const Header =() =>
{

return(
<div className="flex  text-black h-20 w-full ">

<div className="flex-1 relative overflow-hidden">
  <img src={Logo} className=' object-center h-full w-full'/>
 </div>  
<div className="flex-1">02</div>
<div className="flex-1">03</div>

</div>
 
);

}

export default Header;

