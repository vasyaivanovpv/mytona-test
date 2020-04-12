import LocationTypeImage from "./LocationTypeImage";
import ArrowBackBtn from "./ArrowBackBtn";

const LocationHeader = ({ name, type }) => (
  <div className="LocationHeader-root">
    <div className="LocationHeader-arrowBack">
      <ArrowBackBtn />
    </div>
    <div className="LocationHeader-img">
      <div className="LocationHeaderImg-root">
        <LocationTypeImage locationType={type} />
      </div>
    </div>
    <div className="Location-header">
      <div className="LocationHeader-name">{name}</div>
      <div className="LocationHeader-type">{type}</div>
    </div>
    <style jsx>{`
      .LocationHeader-root {
        max-width: 414px;
        margin: 0 auto 50px;
      }
      .LocationHeader-arrowBack {
        position: absolute;
        top: 10px;
        left: 14px;
      }
      .Location-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 13px;
      }
      .LocationHeader-img {
        display: flex;
        justify-content: center;
      }
      .LocationHeaderImg-root {
        width: 414px;
        height: 414px;
      }
      .LocationHeader-name {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;

        color: #ffffff;
        margin-bottom: 7px;
      }
      .LocationHeader-type {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #dcdcdc;
      }
    `}</style>
  </div>
);

export default LocationHeader;
