import { useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const DevPage = ({items}) =>
{
  const {id} = useParams();
  const itemId = +id;
  
  const selectedItem = items.find(item => item.id === itemId);
  
  const skill = selectedItem.skills.map(item => (
   
   <p className="text-lg font-serif md:text-3xl xl:text-4xl">{item}</p>
   
  ));
  
let len=selectedItem.skills.length

  return(
        <div className='flex flex-col mx-4'>
            
            <div className="flex flex-col  h-64 items-center ">
                <img src={selectedItem.image} className="rounded-xl h-64 w-52 mt-8"/>
                <h className='text-2xl font-bela mt-4'>{selectedItem.name}</h>
            </div>
            <div className="flex flex-col gap-4">
              <div className="mt-24 mb-12 sm:my-24">
                <h1 className="text-3xl sm:text-4xl font-dms">ABOUT ME</h1>
                <p className="px-3 pt-5 text-md sm:text-xl">{selectedItem.about}</p>
              </div>
              <div className=" sm:my-12">
                <h1 className="text-3xl  sm:text-4xl font-dms mb-12">PROJECTS</h1>
                <div className="flex flex-col mx-16 sm:flex-row gap-5 ">
                    <div className="flex-1"><ProjectCard/></div>
                    <div className="flex-1"><ProjectCard/></div>
                    <div className="flex-1"><ProjectCard/></div>
                </div>
              </div>
             <div className="my-12">
                <h1 className="text-3xl md:text-4xl font-dms">SKILL-SET</h1>
                <div className="grid grid-cols-3 grid-row-2 text-center gap-6 mt-8">
                {skill}
                </div>
             </div>
            <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-dms">CONTACT</h1>
                <div className="flex flex-col items-center my-10 gap-5">
                    <div className="text-xl font-bela md:text-2xl lg:text-3xl">{selectedItem.mail}</div>
                    <div ><a href="https://github.com/YBC2204"><i className="devicon-github-original colored" style={{ fontSize: '4rem' }}></i></a></div>
                    <div><i className="devicon-twitter-original" style={{ fontSize: '3rem' }}></i></div>
                    <div><a href="https://www.linkedin.com/in/yadhukrishnan-bc-a44004259/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" className="h-12"/></a></div>

                </div>
            </div>  
            </div>
        </div>
    )
};

export default DevPage;

  {/* <i className="devicon-html5-plain-wordmark" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-tailwindcss-original-wordmark" style={{ fontSize: '5rem' }}></i>
                <i className="devicon-react-original colored" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-java-plain-wordmark" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-javascript-plain" style={{ fontSize: '4rem' }}></i>
<i className="devicon-typescript-plain" style={{ fontSize: '4rem' }}></i> */}