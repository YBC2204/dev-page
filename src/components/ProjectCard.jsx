import Man from '../assets/coding-man.jpg'
import 'primeicons/primeicons.css';
const Project = () =>
{
    return(
        <div className="flex flex-col w-50 border-2 border-teal-400 rounded-xl">
        <div className="w-full h-fit relative overflow-hidden rounded-t-xl">
            <img src={Man} className=' object-center h-full w-full ' alt='devimg'/>
        </div>
        <div className='h-12 bg-black rounded-b-xl text-white'>
         <div className='text-center'>This Project is about ..............</div>
           <div className='text-center text-blue-800 hover:underline'><i className="pi pi-link " style={{ fontSize: '1rem' }}></i><a href=''>Project-link</a></div>
        </div>
     </div>
    );
};

export default Project;