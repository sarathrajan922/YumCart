import { Link,  useHistory } from "react-router-dom";
import { IMG_CDN_URL } from "./config";

const Resturantcomponents = ({
    name,
    cloudinaryImageId,
    costForTwoString,
    avgRating,
    id
  }) => {


  // const activeLinkStyles = {
  //   textDecoration: 'underline'
  // };
  
  // const linkStyles = {
  //   textDecoration: 'none',
  // };


    
    return (
      <div className="card"  >
        <img 
          src={
             IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h4 >{name}</h4>
        <h5 >{costForTwoString}</h5>
        <h6 >{avgRating} stars</h6>
  
      </div>
    );
  };

  export default Resturantcomponents;