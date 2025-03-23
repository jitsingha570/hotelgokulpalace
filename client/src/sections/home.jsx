import Imghome from "../assets/pictures/Imghome.jpg";
import Searchbar from "../component/searchbar";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-red-900 bg-opacity-50 w-full min-h-screen relative">
      <img src={Imghome} className=" flex object-cover w-11/12 h-150 mt-20 shadow-lg" alt="Home" />
      
      <div className=" flex flex-col justify-center items-center relative  bottom-15 md:bottom-20 bg-white bg-opacity-50 w-4/5 h-30  text-center p-4 text-indigo-900 uppercase font-light z-10 shadow-md ">
        <h1 className="text-2xl font-bold">Picture your jit next amazing stay</h1>
       
      </div>
      <div className="flex flex-col justify-center items-center relative bottom-10 ">
          <p className="w-9/10 justify-center items-center text-white text-xs leading-5 font-light">
            Escape to Impression Isla Mujeres by Secrets, named “The Most Instagrammable Hotel in the World” by Luxury Travel Advisor. Make it a memorable stay while enjoying your Best. Year. Yet. with savings of up to 40% on your room rate. Terms apply.
          </p>
          <button className="w-48 h-8 mt-2 px-2 bg-transparent text-white shadow-md hover:bg-white hover:text-white hover:scale-105 transition-all border border-white">EXPLORE</button>
        </div>
    </div>
  );
}

export default Home;