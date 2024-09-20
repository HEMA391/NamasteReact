import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    deliveryTime = restaurant?.info?.sla?.deliveryTime,
  } = restaurant?.info || {};
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
