import Girl from '../assets/random girl.jpg'
const DevCard = () =>
{
    return(
     <div className="flex flex-col w-50 border-2 border-blue-800 rounded-xl">
        <div className="w-full h-fit relative overflow-hidden rounded-t-xl">
            <img src={Girl} className=' object-center h-full w-full ' alt='devimg'/>
        </div>
        <div className='h-12 bg-black rounded-b-xl text-white'>
           <div className='text-center'>Developer X</div> 
           <div className='text-center'>Front-End</div>
        </div>
     </div>
    );
};

export default DevCard;

