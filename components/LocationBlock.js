import Link from "next/link";

import LocationTypeImage from "./LocationTypeImage";
import LocationBlockResidents from "./LocationBlockResidents";

const LocationBlock = ({ location }) => (
  <div className="LocationBlock-root" key={location.id}>
    <Link href="/locations/[id]" as={`/locations/${location.id}`}>
      <a className="LocationBlock-link">
        <div className="LocationBlock-img">
          <LocationTypeImage locationType={location.type} size="small" />
        </div>
        <div className="LocationBlock-body">
          <div className="LocationBlock-name">{location.name}</div>
          <div className="LocationBlock-type">{location.type}</div>
          <div className="LocationBlock-residents">
            <LocationBlockResidents
              residents={location.residents.slice(0, 3)}
            />
          </div>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .LocationBlock-root {
        width: 100%;
        height: 145px;
        margin-bottom: 8px;
        background: #312a2a;
        box-shadow: 2px 2px 10px rgba(29, 99, 234, 0.48);
      }
      .LocationBlock-link {
        display: flex;
        width: 100%;
        height: 100%;
      }
      .LocationBlock-img {
        width: 145px;
        height: 145px;
      }
      .LocationBlock-body {
        flex: 1;
        padding: 16px 16px 11px 16px;
        overflow: hidden;
      }
      .LocationBlock-name {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .LocationBlock-type {
        color: #dcdcdc;
        margin-bottom: 11px;
      }
      .LocationBlock-residents {
      }
    `}</style>
  </div>
);

export default LocationBlock;
