import Link from "next/link";

const ResidentBlock = ({ resident, locationName }) => (
  <div className="ResidentBlock-root">
    <Link href="/residents/[id]" as={`/residents/${resident.id}`}>
      <a className="ResidentBlock-link">
        <div className="ResidentBlock-img">
          <img src={resident.image} alt="resident" />
        </div>
        <div className="ResidentBlock-body">
          <div className="ResidentBlock-name">{resident.name}</div>
          <div className="ResidentBlock-location">{locationName}</div>
          <div className="ResidentBlock-species">{resident.species}</div>
        </div>
      </a>
    </Link>

    <style jsx>{`
      img {
        width: 100%;
      }
      .ResidentBlock-root {
        width: 100%;
        height: 145px;
        background: #073955;
        box-shadow: 2px 2px 10px rgba(29, 99, 234, 0.48);
        margin-bottom: 8px;
      }
      .ResidentBlock-link {
        display: flex;
      }
      .ResidentBlock-img {
        flex-shrink: 0;
        width: 145px;
        height: 145px;
      }
      .ResidentBlock-body {
        flex-grow: 1;
        padding: 29px 17px;
        overflow: hidden;
      }
      .ResidentBlock-name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 7px;
      }
      .ResidentBlock-location,
      .ResidentBlock-species {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 7px;
        color: #dcdcdc;
      }
      .ResidentBlock-species {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

export default ResidentBlock;
