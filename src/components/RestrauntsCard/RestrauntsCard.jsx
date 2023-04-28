import "./RestrauntsCard.css";
import { IMG_CDN_URL } from "../../Contants";
const RestrauntsCard = (data) => {
  const { cloudinaryImageId, name, area, costForTwo, maxDeliveryTime } =
    data.data;
  return (
    <div className="RestrauntsCard">
      <img src={IMG_CDN_URL + cloudinaryImageId} />

      <div className="RestrauntName">{name}</div>
      <div className="RestrauntLocation">{area}</div>

      <div className="RestrauntInfo">
        {" "}
        <p>{costForTwo}</p>
        <p>{maxDeliveryTime}</p>
        <a>order now</a>
      </div>
    </div>
  );
};
export { RestrauntsCard };
