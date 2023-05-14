import { render } from "react-dom";
import { restaurantData , swiggy_API} from "./config";
import Resturantcomponents from "./Resturantcomponents";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmerUI";
import { 
  Audio,
  CirclesWithBar,
  Dna,Circles,FallingLines,
  InfinitySpin ,MagnifyingGlass,Vortex,Watch,BallTriangle
} from "react-loader-spinner";
import { Link } from "react-router-dom";



//? function for filtering data
function filterData(searchtext, resturantData) {
  const lowercaseSearchTxt = searchtext.toLowerCase();
  return resturantData.filter((doc) =>
    doc.data.name.toLowerCase().includes(lowercaseSearchTxt)
  );
}

const Bodycomponents = () => {
  const [resturants, setresturants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  

  useEffect(()=>{
   //call api calling funciton
   restaurantAPIcall()
  },[])

 const restaurantAPIcall = async()=>{
  try {
    const data = await fetch(swiggy_API);
    const json = await data?.json()
    console.log(json?.data?.cards[2]?.data?.data?.cards)
    setresturants(json?.data?.cards[2]?.data?.data?.cards)


  } catch (error){
    console.log(error)
  }
  }
  const linkStyles = {
    textDecoration: 'none',
    color: '#030404',
  };






  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input "
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //todo get searched text from input field
            const data = filterData(searchTxt, restaurantData);

          
            //todo  update the resturant data
            setresturants(data);
          }}
        >
          search
        </button>
      </div>

    
      

      <div className="resturant-list">
        
        {!resturants.length ? < ShimmerUI  /> : resturants?.map((x) => (
         < Link to={`/resturant/${x.data.id}`} key={x.data.id} style={linkStyles}> <Resturantcomponents {...x.data}  /></Link>
        ))}
        
      </div>

    </>
  );
};

export default Bodycomponents;
