import DevCard from "./DevCard";
import imgList from "../assets/developerlist";

const Home = () =>{
   
    const renderedCards = imgList.map(item => (
        <DevCard key={item.id} item={item}/>
    ));
    return(
        <div className="flex-auto px-14">
            <div className="flex flex-col sm:mt-7 mb-24">
                <div className="text-black text-3xl sm:text-4xl lg:text-6xl xl:text-7xl m-auto font-bagel underline w-full sm:text-6xl ">FIND CREATIVE DEVELOPERS</div>
                <div className="mt-10 text-xl sm:text-3xl font-bela text-teal-200">Hire top developers in the world. We provide great oppurtunities for your website development.</div>
            </div>
            <div className="flex justify-center">
             <div className="grid grid-cols-1 grid-rows-9 md:grid-cols-2  md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3 gap-10 w-full xl:mx-48 mx-12 h-min">
                 
             {renderedCards}
             </div>

            </div>
            
        </div>
    )
};

export default Home;