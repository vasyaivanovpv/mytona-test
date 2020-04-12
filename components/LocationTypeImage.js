import React from "react";
import { locationTypes } from "../constants/locationTypes";
import { checkLocationType } from "../utils";

const LocationTypeImage = ({ locationType, size }) => {
  const updatedLocationType = checkLocationType(locationType, locationTypes);

  const imgSizePrefix = size ? "_small" : "";

  return (
    <div className="LocationTypeImage-root">
      <img
        src={`/Type_${updatedLocationType}${imgSizePrefix}.png`}
        alt={updatedLocationType}
        className="LocationTypeImage-img"
      />
      <style jsx>{`
        .LocationTypeImage-root {
          width: 100%;
          height: 100%;
        }
        .LocationTypeImage-img {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default LocationTypeImage;
