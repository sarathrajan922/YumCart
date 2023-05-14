import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from './config';
import ShimmerUI from "./shimmerUI";
const ResturantMenu = () => {
  const [infoId, setInfoId] = useState();
  const [infoname, setInfoname] = useState("");
  const [infocity, setInfocity] = useState("");
  const [infolocality, setinfolocality] = useState("");
  const [infocost, setInfocost] = useState("");
  const [infoavgRating, setInfoavgRating] = useState("");
  const [infoTotalRating, setInfoTotalRating] = useState("");
  const [infoAggDis, setInfoAggDis] = useState("");
  const [aggregatedDiscountInfoHead, setaggregatedDiscountInfoHead] = useState("");
  const [feeDetails, setFeeDetails] = useState("");
  const [feeDetMsg, setfeeDetmsg] = useState("");
  const [cloudinaryImg, setcloudinaryImg] = useState('')

  const id = useParams();
  console.log(id)

  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.943811700000001&lng=76.3275467&restaurantId=${id.id}`
    );
    const json = await data.json();
    console.log("first")
    console.log(json)
    console.log(json?.data?.cards[0]?.card?.card?.info);

    const info = json?.data?.cards[0]?.card?.card?.info;
    setInfoId(info?.id);
    setInfoname(info?.name);
    setInfocity(info?.city);
    setinfolocality(info?.locality);
    setInfocost(info?.costForTwoMessage);
    setInfoavgRating(info?.avgRating);
    setInfoTotalRating(info?.totalRatingsString);
    setInfoAggDis(info?.aggregatedDiscountInfo);
    setaggregatedDiscountInfoHead(info?.aggregatedDiscountInfo.header);
    setFeeDetails(info?.feeDetails);
    setfeeDetmsg(info?.feeDetails.message);
    setcloudinaryImg(info?.cloudinaryImageId)
  };

  return !infoId ? (< ShimmerUI /> ) :  (
    <>
      <div className="restaurant-details ">
        <div className="res-img">
          <img
            src={IMG_CDN_URL+cloudinaryImg}
            alt="resturant image"
          />
        </div>
        <div className="res-details-card">
          <h1>Restaurant Menu Page</h1>
          <h2>id: {infoId}</h2>
          <h3>Restaurant Information:</h3>
          <ul>
            <li>Name: {infoname}</li>
            <li>City: {infocity}</li>
            <li>Locality: {infolocality}</li>

            <li>Cost for two: {infocost}</li>
            <li>
              Rating: {infoavgRating} ({infoTotalRating})
            </li>
          </ul>
          <h3>Discount Information:</h3>
          {infoAggDis && (
            <ul>
              <li>Header: {aggregatedDiscountInfoHead}</li>
            </ul>
          )}
          <h3>Delivery Fee Information:</h3>
          {feeDetails && (
            <ul>
              <li>Delivery fee: {feeDetMsg}</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ResturantMenu;
