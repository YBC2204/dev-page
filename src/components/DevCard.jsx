import {Link} from 'react-router-dom';

function DevCard ({item})
{
    return(
     <div className="flex flex-col w-50 h-96 border-2 border-blue-800 rounded-xl">
        <div className="w-full h-fit relative overflow-hidden rounded-t-xl">
            <img src={item.image} className=' object-center h-full w-full ' alt='devimg'/>
        </div>
        <div className='h-12 bg-black rounded-b-xl text-white'>
        <Link to={'/devdetails/' + item.id}>
<div className='text-center hover:underline'>{item.name}</div> </Link>  
           <div className='text-center'>{item.role}</div>
        </div>
     </div>
    );
}

export default DevCard;

