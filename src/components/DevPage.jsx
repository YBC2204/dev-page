import Header from "./Header";
import Girl from '../assets/random girl.jpg'
import ProjectCard from "./ProjectCard";

const DevPage = () =>
{
    return(
        <div className="bg-gradient-to-br from-green-400 via-blue-600 to-transparent mt-24">
            <Header/>
            <div className="flex flex-col  h-64 items-center">
                <img src={Girl} className="rounded-xl h-64 w-fit"/>
                <h className='text-2xl font-bela mt-4'>DEVELOPER X</h>
            </div>
            <div className="flex flex-col gap-4">
              <div className="my-24">
                <h1 className="text-4xl font-dms">ABOUT ME</h1>
                <p className="p-3 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className="my-12">
                <h1 className="text-4xl font-dms mb-12">PROJECTS</h1>
                <div className="flex gap-5 m-7">
                    <div className="flex-1"><ProjectCard/></div>
                    <div className="flex-1"><ProjectCard/></div>
                    <div className="flex-1"><ProjectCard/></div>
                </div>
              </div>
             <div className="my-12">
                <h1 className="text-4xl font-dms">SKILL-SET</h1>
                <div className="grid grid-cols-3 grid-row-2 text-center gap-6 my-8">
                <i className="devicon-html5-plain-wordmark" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-tailwindcss-original-wordmark" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-react-original colored" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-java-plain-wordmark" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-javascript-plain" style={{ fontSize: '4rem' }}></i>
                <i className="devicon-typescript-plain" style={{ fontSize: '4rem' }}></i>
                </div>
             </div>
            <div className="my-12">
            <h1 className="text-4xl font-dms">CONTACT</h1>
                <div className="flex flex-col items-center my-10 gap-4">
                    <div className="text-xl font-bela">Email : developer111@gmail.com</div>
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