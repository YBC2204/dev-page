import DevCard from "./DevCard";
import Footer from "./Footer";

const Home = () =>{

    return(
        <div className="flex-auto px-14">
            <div className="flex flex-col sm:mt-7 mb-24">
                <div className="text-black text-4xl m-auto font-bagel underline w-full sm:text-6xl ">FIND CREATIVE DEVELOPERS</div>
                <div className="mt-10 text-3xl font-bela text-teal-200">Hire top developers in the world. We provide great oppurtunities for your website development.</div>
            </div>
            <div className="flex justify-center">
             <div className="grid grid-cols-3 grid-rows-3 gap-10 w-full mx-48 h-min">
                 
             <DevCard/>
             <DevCard/>
             <DevCard/>
             <DevCard/>
             <DevCard/>
             <DevCard/>
             <DevCard/>
             <DevCard/>
             <DevCard/>
             </div>

            </div>
            <Footer/>
        </div>
    )
};

export default Home;